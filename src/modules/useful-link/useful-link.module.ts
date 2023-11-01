import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { UsefulLink } from './useful-link.entity';
import { UsefulLinkService } from './useful-link.service';
import { UsefulLinkController } from './useful-link.controller';

@Module({
  imports: [TypeOrmModule.forFeature([UsefulLink])],
  controllers: [UsefulLinkController],
  providers: [UsefulLinkService],
  exports: [UsefulLinkService],
})
export class UsefulLinkModule {}
