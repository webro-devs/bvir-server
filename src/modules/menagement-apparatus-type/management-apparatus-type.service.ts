import { NotFoundException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import {
  IPaginationOptions,
  Pagination,
  paginate,
} from 'nestjs-typeorm-paginate';

import { UpdateManagementApparatusTypeDto, CreateManagementApparatusTypeDto } from './dto';
import { ManagementApparatusType } from './management-apparatus-type.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ManagementApparatusTypeService {
  constructor(
    @InjectRepository(ManagementApparatusType)
    private readonly managementApparatusTypeRepository: Repository<ManagementApparatusType>,
  ){}

  async getAll(
    options: IPaginationOptions,
  ): Promise<Pagination<ManagementApparatusType>> {
    return paginate<ManagementApparatusType>(this.managementApparatusTypeRepository, options, {
      relations:{
        managementApparatus:true
      }
    });
  }

  async getOne(id: string) {
    const data = await this.managementApparatusTypeRepository
      .findOne({
        where: { id },
      })
      .catch(() => {
        throw new NotFoundException('data not found');
      });

    return data;
  }

  async deleteOne(id: string) {
    const response = await this.managementApparatusTypeRepository.delete(id).catch(() => {
      throw new NotFoundException('data not found');
    });
    return response;
  }

  async change(value: UpdateManagementApparatusTypeDto, id: string) {
    const data = await this.managementApparatusTypeRepository.update(id,value)
    return data
  }

  async create(value: CreateManagementApparatusTypeDto) {
    const data = this.managementApparatusTypeRepository.create(value)
    return await this.managementApparatusTypeRepository.save(data)
  }
}
