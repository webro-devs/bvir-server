import { NotFoundException, Injectable } from '@nestjs/common';
import { FindOptionsWhere, Repository } from 'typeorm';
import {
  IPaginationOptions,
  Pagination,
  paginate,
} from 'nestjs-typeorm-paginate';

import { UpdateManagementDto, CreateManagementDto } from './dto';
import { Management } from './management.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { ManagementEnum } from 'src/infra/shared/enum';

@Injectable()
export class ManagementService {
  constructor(
    @InjectRepository(Management)
    private readonly managementRepository: Repository<Management>,
  ) {}

  async getOne(id: string) {
    const data = await this.managementRepository
      .findOne({
        where: { id },
      })
      .catch(() => {
        throw new NotFoundException('data not found');
      });

    return data;
  }

  async getManagement( options: IPaginationOptions): Promise<Pagination<Management>>{
     return paginate<Management>(this.managementRepository, options, {
      where:{
        type:ManagementEnum.MANAGEMENT
      }
     });
  }

  async getCentralApparatus( options: IPaginationOptions): Promise<Pagination<Management>>{
    return paginate<Management>(this.managementRepository, options, {
      where:{
        type:ManagementEnum.CENTRAL_APPARATUS
      }
     });
  }

  async deleteOne(id: string) {
    const response = await this.managementRepository.delete(id).catch(() => {
      throw new NotFoundException('data not found');
    });
    return response;
  }

  async change(value: UpdateManagementDto, id: string) {
    const response = await this.managementRepository.update({ id }, value);
    return response;
  }

  async create(value: CreateManagementDto) {
   const data = this.managementRepository.create(value)
   return await this.managementRepository.save(data)
  }
}
