import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Gallery } from './gallery.entity';
import { GalleryService } from './gallery.service';
import { GalleryController } from './gallery.controller';
import { AxiosModule } from '../axios/axios.module';

@Module({
  imports: [TypeOrmModule.forFeature([Gallery]),AxiosModule],
  controllers: [GalleryController],
  providers: [GalleryService],
  exports: [GalleryService],
})
export class GalleryModule {}
