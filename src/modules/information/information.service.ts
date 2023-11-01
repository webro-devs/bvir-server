import { NotFoundException, Injectable } from '@nestjs/common';
import { FindOptionsWhere, Repository } from 'typeorm';
import {
  IPaginationOptions,
  Pagination,
  paginate,
} from 'nestjs-typeorm-paginate';

import { UpdateInformationDto, CreateInformationDto } from './dto';
import { Information } from './information.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { InformationTypeEnum } from 'src/infra/shared/enum';

@Injectable()
export class InformationService {
  constructor(
    @InjectRepository(Information)
    private readonly informationRepository: Repository<Information>
  ) {}

  async getAll(
    options: IPaginationOptions,
    where?: FindOptionsWhere<Information>,
  ): Promise<Pagination<Information>> {
    return paginate<Information>(this.informationRepository, options, {
    });
  }

  async getOne(id: string) {
    const data = await this.informationRepository
      .findOne({
        where: { id },
      })
      .catch(() => {
        throw new NotFoundException('data not found');
      });

    return data;
  }

  async getNews(
    options: IPaginationOptions,
  ): Promise<Pagination<Information>> {    
    return paginate<Information>(this.informationRepository, options, {
      where:{
        type:InformationTypeEnum.NEWS
      }
    });
  }

  async getBreakingNews(
    options: IPaginationOptions,
  ): Promise<Pagination<Information>> {
    return paginate<Information>(this.informationRepository, options, {
      where:{
        type:InformationTypeEnum.BREAKING_NEWS
      }
    });
  }

  async getEvents(
    options: IPaginationOptions,
  ): Promise<Pagination<Information>> {
    return paginate<Information>(this.informationRepository, options, {
      where:{
        type:InformationTypeEnum.EVENT
      }
    });
  }

  async getAnnouncement(
    options: IPaginationOptions,
  ): Promise<Pagination<Information>> {
    return paginate<Information>(this.informationRepository, options, {
      where:{
        type:InformationTypeEnum.ANNOUNCEMENT
      }
    });
  }

  async getAdditionalPage(
    options: IPaginationOptions,
  ): Promise<Pagination<Information>> {
    return paginate<Information>(this.informationRepository, options, {
      where:{
        type:InformationTypeEnum.ADDITIONAL_PAGE
      }
    });
  }

  async deleteOne(id: string) {
    const response = await this.informationRepository.delete(id).catch(() => {
      throw new NotFoundException('data not found');
    });
    return response;
  }

  async change(value: UpdateInformationDto, id: string) {
   const data = await this.informationRepository.update(id,value)
   return data
  }

  async create(value: CreateInformationDto) {
    const data = this.informationRepository.create(value)
    return await this.informationRepository.save(data)
  }
}
