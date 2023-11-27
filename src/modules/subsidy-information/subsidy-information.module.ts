import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SubsidyInformation } from './subsidy-information.entity';
import { SubsidyInformationService } from './subsidy-information.service';
import { SubsidyInformationController } from './subsidy-information.controller';

@Module({
  imports: [TypeOrmModule.forFeature([SubsidyInformation])],
  controllers: [SubsidyInformationController],
  providers: [SubsidyInformationService],
  exports: [SubsidyInformationService],
})
export class SubsidyInformationModule {}
