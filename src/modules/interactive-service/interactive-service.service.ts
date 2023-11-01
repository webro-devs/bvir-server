import { NotFoundException, Injectable } from '@nestjs/common';
import { FindOptionsWhere, Repository } from 'typeorm';
import {
  IPaginationOptions,
  Pagination,
  paginate,
} from 'nestjs-typeorm-paginate';

import { UpdateInteractiveServiceDto, CreateInteractiveServiceDto } from './dto';
import { InteractiveService } from './interactive-service.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class InteractiveServiceService {
  constructor(
    @InjectRepository(InteractiveService)
    private readonly interactiveServiceRepository: Repository<InteractiveService>,
  ) {}

  async getAll(
    options: IPaginationOptions,
    where?: FindOptionsWhere<InteractiveService>,
  ): Promise<Pagination<InteractiveService>> {
    return paginate<InteractiveService>(this.interactiveServiceRepository, options, {});
  }

  async getOne(id: string) {
    const data = await this.interactiveServiceRepository
      .findOne({
        where: { id },
      })
      .catch(() => {
        throw new NotFoundException('data not found');
      });

    return data;
  }

  async deleteOne(id: string) {
    const response = await this.interactiveServiceRepository.delete(id).catch(() => {
      throw new NotFoundException('data not found');
    });
    return response;
  }

  async change(value: UpdateInteractiveServiceDto, id: string) {
    const response = await this.interactiveServiceRepository.update({ id }, value);
    return response;
  }

  async create(value: CreateInteractiveServiceDto) {
    const data = this.interactiveServiceRepository.create(value);
    return await this.interactiveServiceRepository.save(data);
  }
}
