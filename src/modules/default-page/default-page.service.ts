import { NotFoundException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';

import { UpdateDefaultPageDto, CreateDefaultPageDto } from './dto';
import { DefaultPage } from './default-page.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class DefaultPageService {
  constructor(
    @InjectRepository(DefaultPage)
    private readonly defaultPageRepository: Repository<DefaultPage>,
  ) {}

  async getAll(){
    return await this.defaultPageRepository.find()
  }

  async getOne(id: string) {
    const data = await this.defaultPageRepository
      .findOne({
        where: { id },
      })
      .catch(() => {
        throw new NotFoundException('data not found');
      });

    return data;
  }

  async getByTypeAndSide(type: string, side: string) {
    side = side || 'left';
    return await this.defaultPageRepository.find({
      where: {
        type,
        side,
      },
      order:{
        date:"DESC"
      }
    });
  }

  async deleteOne(id: string) {
    const response = await this.defaultPageRepository.delete(id).catch(() => {
      throw new NotFoundException('data not found');
    });
    return response;
  }

  async change(value: UpdateDefaultPageDto, id: string) {
    const data = await this.defaultPageRepository.update(id, value);
    return data;
  }

  async create(value: CreateDefaultPageDto) {
    const data = this.defaultPageRepository.create(value);
    return await this.defaultPageRepository.save(data);
  }
}
