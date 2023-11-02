import { NotFoundException, Injectable, BadRequestException, } from '@nestjs/common';
import {  Repository } from 'typeorm';


import { UpdateAgencyStatisticDto, CreateAgencyStatisticDto } from './dto';
import { AgencyStatistic } from './agency-statistic.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class AgencyStatisticService {
  constructor(
    @InjectRepository(AgencyStatistic)
    private readonly agencyStatisticRepository: Repository<AgencyStatistic>,
  ) {}

  async getData() {
    const data =await this.agencyStatisticRepository.find()

    if(!data.length){
      return {}
    }
    const statistic = data[0]

    const totalCount = statistic.rejected + statistic.solved + statistic.uderReview
    const solvedPercantage = Math.round((statistic.solved/totalCount) * 100)
    const rejectedPercantage = Math.round((statistic.rejected/totalCount) * 100)
    const underReviewPercantage = Math.round((statistic.uderReview/totalCount) * 100)

    return {...statistic,totalCount,solvedPercantage,rejectedPercantage,underReviewPercantage}

  }

  async deleteOne(id: string) {
    const response = await this.agencyStatisticRepository.delete(id).catch(() => {
      throw new NotFoundException('data not found');
    });
    return response;
  }

  async change(value: UpdateAgencyStatisticDto, id: string) {
    const response = await this.agencyStatisticRepository.update({ id }, value);
    return response;
  }

  async create(value: CreateAgencyStatisticDto) {
    const dataExist = await this.agencyStatisticRepository.find()
    if(dataExist.length){
      throw new BadRequestException("Data already exist")
    }
    const data = this.agencyStatisticRepository.create(value);
    return await this.agencyStatisticRepository.save(data);
  }
}
