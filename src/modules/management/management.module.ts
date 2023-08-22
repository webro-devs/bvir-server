import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Management } from './management.entity';
import { ManagementService } from './management.service';
import { ManagementController } from './management.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Management])],
  controllers: [ManagementController],
  providers: [ManagementService],
  exports: [ManagementService],
})
export class ManagementModule {}
