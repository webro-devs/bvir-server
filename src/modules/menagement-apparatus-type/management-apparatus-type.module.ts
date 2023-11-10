import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { ManagementApparatusType } from './management-apparatus-type.entity';
import { ManagementApparatusTypeService } from './management-apparatus-type.service';
import { ManagementApparatusTypeController } from './management-apparatus-type.controller';

@Module({
  imports: [TypeOrmModule.forFeature([ManagementApparatusType])],
  controllers: [ManagementApparatusTypeController],
  providers: [ManagementApparatusTypeService],
  exports: [ManagementApparatusTypeService],
})
export class ManagementApparatusTypeModule {}
