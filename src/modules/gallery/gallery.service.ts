import { NotFoundException, Injectable } from '@nestjs/common';
import { FindOptionsWhere, Repository } from 'typeorm';
import {
  IPaginationOptions,
  Pagination,
  paginate,
} from 'nestjs-typeorm-paginate';

import { UpdateGalleryDto, CreateGalleryDto } from './dto';
import { Gallery } from './gallery.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { GalleryTypeEnum } from 'src/infra/shared/enum';
import { AxiosService } from '../axios/axios.service';

@Injectable()
export class GalleryService {
  constructor(
    @InjectRepository(Gallery)
    private readonly galleryRepository: Repository<Gallery>,
    private readonly axiosService: AxiosService,
  ) {}

  async getAll(
    options: IPaginationOptions,
    where?: FindOptionsWhere<Gallery>,
  ): Promise<Pagination<Gallery>> {
    return paginate<Gallery>(this.galleryRepository, options, {
      order:{
        date:"DESC"
      }
    });
  }

  async getOne(id: string) {
    const data = await this.galleryRepository
      .findOne({
        where: { id },
      })
      .catch(() => {
        throw new NotFoundException('data not found');
      });

    return data;
  }

  async getPhotoGallery(
    options: IPaginationOptions,
  ): Promise<Pagination<Gallery>> {
    return paginate<Gallery>(this.galleryRepository, options, {
      where: {
        type: GalleryTypeEnum.PHOTO,
      },
      order:{
        date:"DESC"
      }
    });
  }

  async getVideoGallery(
    options: IPaginationOptions,
  ): Promise<Pagination<Gallery>> {
    return paginate<Gallery>(this.galleryRepository, options, {
      where: {
        type: GalleryTypeEnum.VIDEO,
      },
      order:{
        date:"DESC"
      }
    });
  }

  async deleteOne(id: string) {
    const data = await this.getOne(id);
    if (data.type == 'photo') {
      if (data.url.length) {
        await Promise.all(
          data.url.map(async (e) => {
            await this.axiosService.deleteFile(e);
          }),
        );
      }
    }
    const response = await this.galleryRepository.delete(id).catch(() => {
      throw new NotFoundException('data not found');
    });
    return response;
  }

  async change(value: UpdateGalleryDto, id: string) {
    const response = await this.galleryRepository.update({ id }, value);
    return response;
  }

  async create(value: CreateGalleryDto) {
    const data = this.galleryRepository.create(value);
    return await this.galleryRepository.save(data);
  }
}
