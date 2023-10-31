import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { News } from './information.entity';
import { NewsService } from './information.service';
import { NewsController } from './information.controller';

@Module({
  imports: [TypeOrmModule.forFeature([News])],
  controllers: [NewsController],
  providers: [NewsService],
  exports: [NewsService],
})
export class NewsModule {}
