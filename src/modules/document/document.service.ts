import { NotFoundException, Injectable } from '@nestjs/common';
import { FindOptionsWhere, Repository } from 'typeorm';
import {
  IPaginationOptions,
  Pagination,
  paginate,
} from 'nestjs-typeorm-paginate';

import { UpdateDocumentDto, CreateDocumentDto } from './dto';
import { Document } from './document.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { DocumentTypeEnum } from 'src/infra/shared/enum';

@Injectable()
export class DocumentService {
  constructor(
    @InjectRepository(Document)
    private readonly documentRepository: Repository<Document>,
  ) {}

  async getAll(
    options: IPaginationOptions,
  ): Promise<Pagination<Document>> {
    return paginate<Document>(this.documentRepository, options, {});
  }

  async getOne(id: string) {
    const data = await this.documentRepository
      .findOne({
        where: { id },
      })
      .catch(() => {
        throw new NotFoundException('data not found');
      });

    return data;
  }

  async getDocument_1(
    options: IPaginationOptions,
  ): Promise<Pagination<Document>> {
    return paginate<Document>(this.documentRepository, options, {
      where:{
        type:DocumentTypeEnum.DOCUMENT_1
      }
    });
  }

  async getDocument_2(
    options: IPaginationOptions,
  ): Promise<Pagination<Document>> {
    return paginate<Document>(this.documentRepository, options, {
      where:{
        type:DocumentTypeEnum.DOCUMENT_2
      }
    });
  }

  async getDocument_3(
    options: IPaginationOptions,
  ): Promise<Pagination<Document>> {
    return paginate<Document>(this.documentRepository, options, {
      where:{
        type:DocumentTypeEnum.DOCUMENT_3
      }
    });
  }

  async getDocument_4(
    options: IPaginationOptions,
  ): Promise<Pagination<Document>> {
    return paginate<Document>(this.documentRepository, options, {
      where:{
        type:DocumentTypeEnum.DOCUMENT_4
      }
    });
  }

  async getDocument_5(
    options: IPaginationOptions,
  ): Promise<Pagination<Document>> {
    return paginate<Document>(this.documentRepository, options, {
      where:{
        type:DocumentTypeEnum.DOCUMENT_5
      }
    });
  }

  async deleteOne(id: string) {
    const response = await this.documentRepository.delete(id).catch(() => {
      throw new NotFoundException('data not found');
    });
    return response;
  }

  async change(value: UpdateDocumentDto, id: string) {
    const response = await this.documentRepository.update({ id }, value);
    return response;
  }

  async create(value: CreateDocumentDto) {
    const data = this.documentRepository.create(value);
    return await this.documentRepository.save(data);
  }
}
