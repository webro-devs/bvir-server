import { NotFoundException, Injectable } from '@nestjs/common';
import { FindOptionsWhere, Repository } from 'typeorm';
import {
  IPaginationOptions,
  Pagination,
  paginate,
} from 'nestjs-typeorm-paginate';

import { UpdateAgencyDto, CreateAgencyDto } from './dto';
import { Agency } from './agency.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AgencyService {
  constructor(
    @InjectRepository(Agency)
    private readonly agencyRepository: Repository<Agency>,
  ){}

  async getAll(
    options: IPaginationOptions,
    where?: FindOptionsWhere<Agency>,
  ): Promise<Pagination<Agency>> {
    return paginate<Agency>(this.agencyRepository, options, {});
  }

  async getOne(id: string) {
    const data = await this.agencyRepository
      .findOne({
        where: { id },
      })
      .catch(() => {
        throw new NotFoundException('data not found');
      });

    return data;
  }

  async deleteOne(id: string) {
    const response = await this.agencyRepository.delete(id).catch(() => {
      throw new NotFoundException('data not found');
    });
    return response;
  }

  async change(value: UpdateAgencyDto, id: string) {
    const data = await this.agencyRepository.update(id,value)
    return data
  }

  async create(value: CreateAgencyDto) {
    const data = this.agencyRepository.create(value)
    return await this.agencyRepository.save(data)
  }
}
