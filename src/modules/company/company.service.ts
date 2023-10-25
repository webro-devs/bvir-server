import { NotFoundException, Injectable } from '@nestjs/common';
import { FindOptionsWhere, Repository } from 'typeorm';
import {
  IPaginationOptions,
  Pagination,
  paginate,
} from 'nestjs-typeorm-paginate';

import { UpdateCompanyDto, CreateCompanyDto } from './dto';
import { Company } from './company.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private readonly companyRepository: Repository<Company>,
  ){}

  async getAll(
    options: IPaginationOptions,
    where?: FindOptionsWhere<Company>,
  ): Promise<Pagination<Company>> {
    return paginate<Company>(this.companyRepository, options, {});
  }

  async getOne(id: string) {
    const data = await this.companyRepository
      .findOne({
        where: { id },
      })
      .catch(() => {
        throw new NotFoundException('data not found');
      });

    return data;
  }

  async deleteOne(id: string) {
    const response = await this.companyRepository.delete(id).catch(() => {
      throw new NotFoundException('data not found');
    });
    return response;
  }

  async change(value: UpdateCompanyDto, id: string) {
    const response = await this.companyRepository.update({ id }, value);
    return response;
  }

  async create(value: CreateCompanyDto) {
    const data = this.companyRepository.create(value);
    return await this.companyRepository.save(data);
  }
}
