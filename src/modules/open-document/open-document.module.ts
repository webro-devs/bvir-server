import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { OpenDocument } from './open-document.entity';
import { OpenDocumentService } from './open-document.service';
import { OpenDocumentController } from './open-document.controller';

@Module({
  imports: [TypeOrmModule.forFeature([OpenDocument])],
  controllers: [OpenDocumentController],
  providers: [OpenDocumentService],
  exports: [OpenDocumentService],
})
export class OpenDocumentModule {}
