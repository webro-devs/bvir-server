import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Agency } from './agency.entity';
import { AgencyService } from './agency.service';
import { AgencyController } from './agency.controller';
import { LanguageModule } from '../language/language.module';

@Module({
  imports: [TypeOrmModule.forFeature([Agency]),LanguageModule],
  controllers: [AgencyController],
  providers: [AgencyService],
  exports: [AgencyService],
})
export class AgencyModule {}
