import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Information } from './information.entity';
import { InformationService } from './information.service';
import { InformationController } from './information.controller';
import { LanguageModule } from '../language/language.module';

@Module({
  imports: [TypeOrmModule.forFeature([Information]),LanguageModule],
  controllers: [InformationController],
  providers: [InformationService],
  exports: [InformationService],
})
export class InformationModule {}
