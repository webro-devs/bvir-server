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
import { LanguageService } from '../language/language.service';
import { InformationTypeEnum } from 'src/infra/shared/enum';

@Injectable()
export class InformationService {
  constructor(
    @InjectRepository(Information)
    private readonly informationRepository: Repository<Information>,
    private readonly languageService:LanguageService
  ) {}

  async getAll(
    options: IPaginationOptions,
    where?: FindOptionsWhere<Information>,
  ): Promise<Pagination<Information>> {
    return paginate<Information>(this.informationRepository, options, {
      relations:{
        description:true,
        title:true
      }
    });
  }

  async getOne(id: string) {
    const data = await this.informationRepository
      .findOne({
        where: { id },
        relations:{
          description:true,
          title:true
        }
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
      relations:{
        description:true,
        title:true
      },
      where:{
        type:InformationTypeEnum.NEWS
      }
    });
  }

  async getBreakingNews(
    options: IPaginationOptions,
  ): Promise<Pagination<Information>> {
    return paginate<Information>(this.informationRepository, options, {
      relations:{
        description:true,
        title:true
      },
      where:{
        type:InformationTypeEnum.BREAKING_NEWS
      }
    });
  }

  async getEvents(
    options: IPaginationOptions,
  ): Promise<Pagination<Information>> {
    return paginate<Information>(this.informationRepository, options, {
      relations:{
        description:true,
        title:true
      },
      where:{
        type:InformationTypeEnum.EVENT
      }
    });
  }

  async getAnnouncement(
    options: IPaginationOptions,
  ): Promise<Pagination<Information>> {
    return paginate<Information>(this.informationRepository, options, {
      relations:{
        description:true,
        title:true
      },
      where:{
        type:InformationTypeEnum.ANNOUNCEMENT
      }
    });
  }

  async getAdditionalPage(
    options: IPaginationOptions,
  ): Promise<Pagination<Information>> {
    return paginate<Information>(this.informationRepository, options, {
      relations:{
        description:true,
        title:true
      },
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
    if(value.description){
     await this.languageService.change(value.description,value.description.id)
    }
    if(value.title){
     await this.languageService.change(value.title,value.title.id)
    }
    if(value.type || value.url){
      const data:any = {}
      value.type ? data.type = value.type : null
      value.url ? data.url = value.url : null
      return await this.informationRepository.update(id,data)
    }else{
      return "updated"
    }
  }

  async create(value: CreateInformationDto) {
    const newInfo = new Information()
    newInfo.url = value.url
    newInfo.type = value.type
    
    await this.informationRepository.save(newInfo)

    await this.languageService.create([
      {...value.description,informationDescription:newInfo.id},
      {...value.title,informationTitle:newInfo.id},
    ])
    
    return await this.getOne(newInfo.id)
  }
}
