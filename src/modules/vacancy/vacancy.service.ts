import { NotFoundException, Injectable } from '@nestjs/common';
import { FindOptionsWhere, Repository } from 'typeorm';
import {
  IPaginationOptions,
  Pagination,
  paginate,
} from 'nestjs-typeorm-paginate';

import { UpdateVacancyDto, CreateVacancyDto } from './dto';
import { Vacancy } from './vacancy.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class VacancyService {
  constructor(
    @InjectRepository(Vacancy)
    private readonly vacancyRepository: Repository<Vacancy>,
  ) {}

  async getAll(
    options: IPaginationOptions,
    where?: FindOptionsWhere<Vacancy>,
  ): Promise<Pagination<Vacancy>> {
    return paginate<Vacancy>(this.vacancyRepository, options, {});
  }

  async getOne(id: string) {
    const data = await this.vacancyRepository
      .findOne({
        where: { id },
      })
      .catch(() => {
        throw new NotFoundException('data not found');
      });

    return data;
  }

  async deleteOne(id: string) {
    const response = await this.vacancyRepository.delete(id).catch(() => {
      throw new NotFoundException('data not found');
    });
    return response;
  }

  async change(value: UpdateVacancyDto, id: string) {
    const response = await this.vacancyRepository.update({ id }, value);
    return response;
  }

  async create(value: CreateVacancyDto) {
    const data = this.vacancyRepository.create(value);
    return await this.vacancyRepository.save(data);
  }
}
