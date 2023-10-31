import { NotFoundException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


import { UpdateLanguageDto, CreateLanguageDto } from './dto';
import { Language } from './language.entity';

@Injectable()
export class LanguageService {
  constructor(
    @InjectRepository(Language)
    private readonly languageRepository: Repository<Language>,
  ) {}

  async deleteOne(id: string) {
    const response = await this.languageRepository.delete(id).catch(() => {
      throw new NotFoundException('data not found');
    });
    return response;
  }

  async change(value: UpdateLanguageDto, id: string) {
    const response = await this.languageRepository.update({ id }, value);
    return response;
  }

  async create(value: CreateLanguageDto) {
    const data = this.languageRepository.create(value);
    return await this.languageRepository.save(data);
  }
}
