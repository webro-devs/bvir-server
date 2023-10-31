import { NotFoundException, Injectable } from '@nestjs/common';
import { FindOptionsWhere, Repository } from 'typeorm';
import {
  IPaginationOptions,
  Pagination,
  paginate,
} from 'nestjs-typeorm-paginate';

import { UpdateCompanyDto, CreateCompanyDto } from './dto';
import { Agency } from './agency.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { LanguageService } from '../language/language.service';

@Injectable()
export class AgencyService {
  constructor(
    @InjectRepository(Agency)
    private readonly agencyRepository: Repository<Agency>,
    private readonly languageService:LanguageService
  ){}

  async getAll(
    options: IPaginationOptions,
    where?: FindOptionsWhere<Agency>,
  ): Promise<Pagination<Agency>> {
    return paginate<Agency>(this.agencyRepository, options, {
      relations:{
        title:true,
        description:true
      }
    });
  }

  async getOne(id: string) {
    const data = await this.agencyRepository
      .findOne({
        where: { id },
        relations:{
          title:true,
          description:true
        }
      })
      .catch(() => {
        throw new NotFoundException('data not found');
      });

    return data;
  }

  async deleteOne(id: string) {
    const response = await this.agencyRepository.delete(id).catch(() => {
      throw new NotFoundException('data not found');
    });
    return response;
  }

  async change(value: UpdateCompanyDto, id: string) {
    if(value.description){
      await this.languageService.change(value.description,value.description.id)
     }
     if(value.title){
      await this.languageService.change(value.title,value.title.id)
     }
     if(value.link || value.url){
       const data:any = {}
       value.link ? data.link = value.link : null
       value.url ? data.url = value.url : null
       return await this.agencyRepository.update(id,data)
     }else{
       return "updated"
     }
  }

  async create(value: CreateCompanyDto) {
    const agency = new Agency()
    agency.url = value.url
    agency.link = value.link
    
    await this.agencyRepository.save(agency)

    await this.languageService.create([
      {...value.description,agencyDescription:agency.id},
      {...value.title,agencyTitle:agency.id},
    ])
    
    return await this.getOne(agency.id)
  }
}
