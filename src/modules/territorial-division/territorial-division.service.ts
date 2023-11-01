import { NotFoundException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import {
  IPaginationOptions,
  Pagination,
  paginate,
} from 'nestjs-typeorm-paginate';

import { UpdateTerritorialDivisionDto, CreateTerritorialDivisionDto } from './dto';
import { TerritorialDivision } from './territorial-division.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TerritorialDivisionService {
  constructor(
    @InjectRepository(TerritorialDivision)
    private readonly territorialDivisionRepository: Repository<TerritorialDivision>,
  ) {}

  async getOne(id: string) {
    const data = await this.territorialDivisionRepository
      .findOne({
        where: { id },
        relations:{
          territorialManagements:true
        }
      })
      .catch(() => {
        throw new NotFoundException('data not found');
      });

    return data;
  }

  async getAll( options: IPaginationOptions): Promise<Pagination<TerritorialDivision>>{
     return paginate<TerritorialDivision>(this.territorialDivisionRepository, options, {});
  }


  async deleteOne(id: string) {
    const response = await this.territorialDivisionRepository.delete(id).catch(() => {
      throw new NotFoundException('data not found');
    });
    return response;
  }

  async change(value: UpdateTerritorialDivisionDto, id: string) {
    const response = await this.territorialDivisionRepository.update({ id }, value);
    return response;
  }

  async create(value: CreateTerritorialDivisionDto) {
   const data = this.territorialDivisionRepository.create(value)
   return await this.territorialDivisionRepository.save(data)
  }
}
