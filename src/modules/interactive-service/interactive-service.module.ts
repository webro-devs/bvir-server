import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { InteractiveService } from './interactive-service.entity';
import { InteractiveServiceService } from './interactive-service.service';
import { InteractiveServiceController } from './interactive-service.controller';

@Module({
  imports: [TypeOrmModule.forFeature([InteractiveService])],
  controllers: [InteractiveServiceController],
  providers: [InteractiveServiceService],
  exports: [InteractiveServiceService],
})
export class InteractiveServiceModule {}
