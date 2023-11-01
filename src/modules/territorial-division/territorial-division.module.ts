import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { TerritorialDivision } from './territorial-division.entity';
import { TerritorialDivisionService } from './territorial-division.service';
import { TerritorialDivisionController } from './territorial-division.controller';

@Module({
  imports: [TypeOrmModule.forFeature([TerritorialDivision])],
  controllers: [TerritorialDivisionController],
  providers: [TerritorialDivisionService],
  exports: [TerritorialDivisionService],
})
export class TerritorialDivisionModule {}
