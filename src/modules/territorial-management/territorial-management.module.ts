import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TerritorialManagement } from './territorial-management.entity';
import { TerritorialManagementService } from './territorial-management.service';
import { TerritorialManagementController } from './territorial-management.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TerritorialManagement])],
  controllers: [TerritorialManagementController],
  providers: [TerritorialManagementService],
  exports: [TerritorialManagementService],
})
export class TerritorialManagementModule {}
