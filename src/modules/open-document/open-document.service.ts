import { NotFoundException, Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import {
  IPaginationOptions,
  Pagination,
  paginate,
} from 'nestjs-typeorm-paginate';

import { UpdateOpenDocumentDto, CreateOpenDocumentDto } from './dto';
import { OpenDocument } from './open-document.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { OpenDocumentTypeEnum } from 'src/infra/shared/enum';
import { AxiosService } from '../axios/axios.service';

@Injectable()
export class OpenDocumentService {
  constructor(
    @InjectRepository(OpenDocument)
    private readonly openDocumentRepository: Repository<OpenDocument>,
    private readonly axiosService: AxiosService
  ) {}

  async getAll(
    options: IPaginationOptions,
    where
  ): Promise<Pagination<OpenDocument>> {
    return paginate<OpenDocument>(this.openDocumentRepository, options, {
      where,
      order:{
        date:"DESC"
      }
    });
  }

  async getOne(id: string) {
    const data = await this.openDocumentRepository
      .findOne({
        where: { id },
      })
      .catch(() => {
        throw new NotFoundException('data not found');
      });

    return data;
  }

  async getDocument(
    options: IPaginationOptions,
    type:OpenDocumentTypeEnum,
    where
  ): Promise<Pagination<OpenDocument>> {
    return paginate<OpenDocument>(this.openDocumentRepository, options, {
      where:{
        type,
        ...where
      },
      order:{
        date:"DESC"
      }
    });
  }

  async deleteOne(id: string) {
    const data = await this.getOne(id)
    if(data.link){
      await this.axiosService.deleteFile(data.link)
    }
    const response = await this.openDocumentRepository.delete(id).catch(() => {
      throw new NotFoundException('data not found');
    });
    return response;
  }

  async change(value: UpdateOpenDocumentDto, id: string) {
    const response = await this.openDocumentRepository.update({ id }, value);
    return response;
  }

  async create(value: CreateOpenDocumentDto) {
    const data = this.openDocumentRepository.create(value);
    return await this.openDocumentRepository.save(data);
  }
}
