import { NotFoundException, Injectable } from '@nestjs/common';
import { FindOptionsWhere, Repository } from 'typeorm';
import {
  IPaginationOptions,
  Pagination,
  paginate,
} from 'nestjs-typeorm-paginate';

import { UpdateBannerDto, CreateBannerDto } from './dto';
import { Banner } from './banner.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { BannerTypeEnum } from 'src/infra/shared/enum';

@Injectable()
export class BannerService {
  constructor(
    @InjectRepository(Banner)
    private readonly bannerRepository: Repository<Banner>
  ) {}

  async getAll(
    options: IPaginationOptions,
  ): Promise<Pagination<Banner>> {
    return paginate<Banner>(this.bannerRepository, options, {
    });
  }

  async getOne(id: string) {
    const data = await this.bannerRepository
      .findOne({
        where: { id },
      })
      .catch(() => {
        throw new NotFoundException('data not found');
      });

    return data;
  }

  async getLeftBanner(
    options: IPaginationOptions,
  ): Promise<Pagination<Banner>> {    
    return paginate<Banner>(this.bannerRepository, options, {
      where:{
        type:BannerTypeEnum.LEFT
      }
    });
  }

  async getRightBanner(
    options: IPaginationOptions,
  ): Promise<Pagination<Banner>> {
    return paginate<Banner>(this.bannerRepository, options, {
      where:{
        type:BannerTypeEnum.RIGHT
      }
    });
  }

  async deleteOne(id: string) {
    const response = await this.bannerRepository.delete(id).catch(() => {
      throw new NotFoundException('data not found');
    });
    return response;
  }

  async change(value: UpdateBannerDto, id: string) {
   const data = await this.bannerRepository.update(id,value)
   return data
  }

  async create(value: CreateBannerDto) {
    const data = this.bannerRepository.create(value)
    return await this.bannerRepository.save(data)
  }
}
