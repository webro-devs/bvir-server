import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { CommunicationTool } from './communication-tool.entity';
import { CommunicationToolService } from './communication-tool.service';
import { CommunicationToolController } from './communication-tool.controller';

@Module({
  imports: [TypeOrmModule.forFeature([CommunicationTool])],
  controllers: [CommunicationToolController],
  providers: [CommunicationToolService],
  exports: [CommunicationToolService],
})
export class CommunicationToolModule {}
