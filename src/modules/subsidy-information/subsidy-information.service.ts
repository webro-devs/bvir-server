import { NotFoundException, Injectable } from '@nestjs/common';
import {  Repository } from 'typeorm';
import {
  IPaginationOptions,
  Pagination,
  paginate,
} from 'nestjs-typeorm-paginate';

import { UpdateSubsidyInformationDto, CreateSubsidyInformationDto } from './dto';
import { SubsidyInformation } from './subsidy-information.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SubsidyInformationService {
  constructor(
    @InjectRepository(SubsidyInformation)
    private readonly subsidyInformationRepository: Repository<SubsidyInformation>,
  ) {}

  async getAll(
    options: IPaginationOptions,
  ): Promise<Pagination<SubsidyInformation>> {
    return paginate<SubsidyInformation>(this.subsidyInformationRepository, options, {});
  }

  async getOne(id: string) {
    const data = await this.subsidyInformationRepository
      .findOne({
        where: { id },
      })
      .catch(() => {
        throw new NotFoundException('data not found');
      });

    return data;
  }

  async deleteOne(id: string) {
    const response = await this.subsidyInformationRepository.delete(id).catch(() => {
      throw new NotFoundException('data not found');
    });
    return response;
  }

  async change(value: UpdateSubsidyInformationDto, id: string) {
    const response = await this.subsidyInformationRepository.update({ id }, value);
    return response;
  }

  async create(value: CreateSubsidyInformationDto) {
    const data = this.subsidyInformationRepository.create(value);
    return await this.subsidyInformationRepository.save(data);
  }
}
