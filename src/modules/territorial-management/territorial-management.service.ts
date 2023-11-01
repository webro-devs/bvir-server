import { NotFoundException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import {
  IPaginationOptions,
  Pagination,
  paginate,
} from 'nestjs-typeorm-paginate';

import { UpdateTerritorialManagementDto, CreateTerritorialManagementDto } from './dto';
import { TerritorialManagement } from './territorial-management.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TerritorialManagementService {
  constructor(
    @InjectRepository(TerritorialManagement)
    private readonly territorialManagementRepository: Repository<TerritorialManagement>,
  ) {}

  async getOne(id: string) {
    const data = await this.territorialManagementRepository
      .findOne({
        where: { id },
      })
      .catch(() => {
        throw new NotFoundException('data not found');
      });

    return data;
  }

  async getAll( options: IPaginationOptions): Promise<Pagination<TerritorialManagement>>{
     return paginate<TerritorialManagement>(this.territorialManagementRepository, options, {});
  }


  async deleteOne(id: string) {
    const response = await this.territorialManagementRepository.delete(id).catch(() => {
      throw new NotFoundException('data not found');
    });
    return response;
  }

  async change(value: UpdateTerritorialManagementDto, id: string) {
    const response = await this.territorialManagementRepository.update({ id }, value);
    return response;
  }

  async create(value: CreateTerritorialManagementDto) {
   const data = await this.territorialManagementRepository.createQueryBuilder()
   .insert()
   .into(TerritorialManagement)
   .values(value as unknown as TerritorialManagement)
   .returning("id")
   .execute()
   return data
  }
}
