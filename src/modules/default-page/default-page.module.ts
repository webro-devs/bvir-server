import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { DefaultPage } from './default-page.entity';
import { DefaultPageService } from './default-page.service';
import { DefaultPageController } from './default-page.controller';

@Module({
  imports: [TypeOrmModule.forFeature([DefaultPage])],
  controllers: [DefaultPageController],
  providers: [DefaultPageService],
  exports: [DefaultPageService],
})
export class DefaultPageModule {}
