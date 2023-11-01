import { NotFoundException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import {
  IPaginationOptions,
  Pagination,
  paginate,
} from 'nestjs-typeorm-paginate';

import { UpdateCommunicationToolDto, CreateCommunicationToolDto } from './dto';
import { CommunicationTool } from './communication-tool.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CommunicationToolService {
  constructor(
    @InjectRepository(CommunicationTool)
    private readonly communicationToolRepository: Repository<CommunicationTool>,
  ){}

  async getAll(
    options: IPaginationOptions,
  ): Promise<Pagination<CommunicationTool>> {
    return paginate<CommunicationTool>(this.communicationToolRepository, options, {});
  }

  async getOne(id: string) {
    const data = await this.communicationToolRepository
      .findOne({
        where: { id },
      })
      .catch(() => {
        throw new NotFoundException('data not found');
      });

    return data;
  }

  async deleteOne(id: string) {
    const response = await this.communicationToolRepository.delete(id).catch(() => {
      throw new NotFoundException('data not found');
    });
    return response;
  }

  async change(value: UpdateCommunicationToolDto, id: string) {
    const data = await this.communicationToolRepository.update(id,value)
    return data
  }

  async create(value: CreateCommunicationToolDto) {
    const data = this.communicationToolRepository.create(value)
    return await this.communicationToolRepository.save(data)
  }
}
