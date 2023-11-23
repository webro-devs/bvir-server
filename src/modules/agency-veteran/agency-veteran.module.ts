import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AgencyVeteran } from './agency-veteran.entity';
import { AgencyVeteranService } from './agency-veteran.service';
import { AgencyVeteranController } from './agency-veteran.controller';
import { AxiosModule } from '../axios/axios.module';

@Module({
  imports: [TypeOrmModule.forFeature([AgencyVeteran]),AxiosModule],
  controllers: [AgencyVeteranController],
  providers: [AgencyVeteranService],
  exports: [AgencyVeteranService],
})
export class AgencyVeteranModule {}
