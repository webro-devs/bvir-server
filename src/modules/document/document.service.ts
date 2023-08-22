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

@Injectable()
export class DocumentService {
  constructor(
    @InjectRepository(Document)
    private readonly documentRepository: Repository<Document>,
  ) {}

  async getAll(
    options: IPaginationOptions,
    where?: FindOptionsWhere<Document>,
  ): Promise<Pagination<Document>> {
    return paginate<Document>(this.documentRepository, options, {
      order: {
        title: 'ASC',
      },
    });
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
