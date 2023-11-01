import { NotFoundException, Injectable } from '@nestjs/common';
import {  Repository } from 'typeorm';
import {
  IPaginationOptions,
  Pagination,
  paginate,
} from 'nestjs-typeorm-paginate';

import { UpdateStatisticDto, CreateStatisticDto } from './dto';
import { Statistic } from './statistic.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class StatisticService {
  constructor(
    @InjectRepository(Statistic)
    private readonly statisticRepository: Repository<Statistic>,
  ) {}

  async getAll(
    options: IPaginationOptions,
  ): Promise<Pagination<Statistic>> {
    return paginate<Statistic>(this.statisticRepository, options, {});
  }

  async getOne(id: string) {
    const data = await this.statisticRepository
      .findOne({
        where: { id },
      })
      .catch(() => {
        throw new NotFoundException('data not found');
      });

    return data;
  }

  async deleteOne(id: string) {
    const response = await this.statisticRepository.delete(id).catch(() => {
      throw new NotFoundException('data not found');
    });
    return response;
  }

  async change(value: UpdateStatisticDto, id: string) {
    const response = await this.statisticRepository.update({ id }, value);
    return response;
  }

  async create(value: CreateStatisticDto) {
    const data = this.statisticRepository.create(value);
    return await this.statisticRepository.save(data);
  }
}
