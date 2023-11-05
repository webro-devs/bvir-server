import { NotFoundException, Injectable } from '@nestjs/common';
import { FindOptionsWhere, Repository } from 'typeorm';
import {
  IPaginationOptions,
  Pagination,
  paginate,
} from 'nestjs-typeorm-paginate';

import { UpdateAgencyVeteranDto, CreateAgencyVeteranDto } from './dto';
import { AgencyVeteran } from './agency-veteran.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AgencyVeteranService {
  constructor(
    @InjectRepository(AgencyVeteran)
    private readonly agencyVeteranRepository: Repository<AgencyVeteran>,
  ){}

  async getAll(
    options: IPaginationOptions,
  ): Promise<Pagination<AgencyVeteran>> {
    return paginate<AgencyVeteran>(this.agencyVeteranRepository, options, {});
  }

  async getOne(id: string) {
    const data = await this.agencyVeteranRepository
      .findOne({
        where: { id },
      })
      .catch(() => {
        throw new NotFoundException('data not found');
      });

    return data;
  }

  async deleteOne(id: string) {
    const response = await this.agencyVeteranRepository.delete(id).catch(() => {
      throw new NotFoundException('data not found');
    });
    return response;
  }

  async change(value: UpdateAgencyVeteranDto, id: string) {
    const data = await this.agencyVeteranRepository.update(id,value)
    return data
  }

  async create(value: CreateAgencyVeteranDto) {
    const data = this.agencyVeteranRepository.create(value)
    return await this.agencyVeteranRepository.save(data)
  }
}
