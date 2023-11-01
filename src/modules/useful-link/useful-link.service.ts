import { NotFoundException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import {
  IPaginationOptions,
  Pagination,
  paginate,
} from 'nestjs-typeorm-paginate';

import { UpdateUsefulLinkDto, CreateUsefulLinkDto } from './dto';
import { UsefulLink } from './useful-link.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsefulLinkService {
  constructor(
    @InjectRepository(UsefulLink)
    private readonly usefulLinkRepository: Repository<UsefulLink>,
  ){}

  async getAll(
    options: IPaginationOptions,
  ): Promise<Pagination<UsefulLink>> {
    return paginate<UsefulLink>(this.usefulLinkRepository, options, {});
  }

  async getOne(id: string) {
    const data = await this.usefulLinkRepository
      .findOne({
        where: { id },
      })
      .catch(() => {
        throw new NotFoundException('data not found');
      });

    return data;
  }

  async deleteOne(id: string) {
    const response = await this.usefulLinkRepository.delete(id).catch(() => {
      throw new NotFoundException('data not found');
    });
    return response;
  }

  async change(value: UpdateUsefulLinkDto, id: string) {
    const data = await this.usefulLinkRepository.update(id,value)
    return data
  }

  async create(value: CreateUsefulLinkDto) {
    const data = this.usefulLinkRepository.create(value)
    return await this.usefulLinkRepository.save(data)
  }
}
