import { NotFoundException, Injectable } from '@nestjs/common';
import { FindOptionsWhere, Repository } from 'typeorm';
import {
  IPaginationOptions,
  Pagination,
  paginate,
} from 'nestjs-typeorm-paginate';

import { UpdateNewsDto, CreateNewsDto } from './dto';
import { News } from './information.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class NewsService {
  constructor(
    @InjectRepository(News)
    private readonly newsRepository: Repository<News>,
  ) {}

  async getAll(
    options: IPaginationOptions,
    where?: FindOptionsWhere<News>,
  ): Promise<Pagination<News>> {
    return paginate<News>(this.newsRepository, options, {
      order: {
        title: 'ASC',
      },
    });
  }

  async getOne(id: string) {
    const data = await this.newsRepository
      .findOne({
        where: { id },
      })
      .catch(() => {
        throw new NotFoundException('data not found');
      });

    return data;
  }

  async deleteOne(id: string) {
    const response = await this.newsRepository.delete(id).catch(() => {
      throw new NotFoundException('data not found');
    });
    return response;
  }

  async change(value: UpdateNewsDto, id: string) {
    const response = await this.newsRepository.update({ id }, value);
    return response;
  }

  async create(value: CreateNewsDto) {
    const data = this.newsRepository.create(value);
    return await this.newsRepository.save(data);
  }
}
