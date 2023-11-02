import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AgencyStatistic } from './agency-statistic.entity';
import { AgencyStatisticService } from './agency-statistic.service';
import { AgencyStatisticController } from './agency-statistic.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AgencyStatistic])],
  controllers: [AgencyStatisticController],
  providers: [AgencyStatisticService],
  exports: [AgencyStatisticService],
})
export class AgencyStatisticModule {}
