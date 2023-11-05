import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AgencyVeteran } from './agency-veteran.entity';
import { AgencyVeteranService } from './agency-veteran.service';
import { AgencyVeteranController } from './agency-veteran.controller';

@Module({
  imports: [TypeOrmModule.forFeature([AgencyVeteran])],
  controllers: [AgencyVeteranController],
  providers: [AgencyVeteranService],
  exports: [AgencyVeteranService],
})
export class AgencyVeteranModule {}
