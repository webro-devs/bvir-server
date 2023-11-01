import {
  Controller,
  Post,
  Body,
  HttpCode,
  HttpStatus,
  Delete,
  Patch,
  Param,
  Get,
  Query,
} from '@nestjs/common';
import { UpdateResult } from 'typeorm';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
  ApiOperation,
} from '@nestjs/swagger';

import { CreateStatisticDto, UpdateStatisticDto } from './dto';
import { Statistic } from './statistic.entity';
import { StatisticService } from './statistic.service';
import { PaginationDto } from '../../infra/shared/dto';
import { Route } from '../../infra/shared/decorators/route.decorator';
import { Public } from '../auth/decorators/public.decorator';

@ApiTags('Statistic')
@Controller('statistic')
export class StatisticController {
  constructor(private readonly statisticService: StatisticService) {}

  @Public()
  @Get('/')
  @ApiOperation({ summary: 'Method: returns all regulatory statistic' })
  @ApiOkResponse({
    description: 'The statistic were returned successfully',
  })
  @HttpCode(HttpStatus.OK)
  async getaAll(@Route() route: string, @Query() query: PaginationDto) {
    return await this.statisticService.getAll({ ...query, route });
  }

  @Public()
  @Get('/:id')
  @ApiOperation({ summary: 'Method: returns single statistic by id' })
  @ApiOkResponse({
    description: 'The statistic was returned successfully',
  })
  @HttpCode(HttpStatus.OK)
  async getMe(@Param('id') id: string): Promise<Statistic> {
    return this.statisticService.getOne(id);
  }

  @Post('/')
  @ApiOperation({ summary: 'Method: creates new statistic' })
  @ApiCreatedResponse({
    description: 'The statistic was created successfully',
  })
  @HttpCode(HttpStatus.CREATED)
  async saveData(@Body() data: CreateStatisticDto): Promise<Statistic> {
    return await this.statisticService.create(data);
  }

  @Patch('/:id')
  @ApiOperation({ summary: 'Method: updating statistic' })
  @ApiOkResponse({
    description: 'Statistic was changed',
  })
  @HttpCode(HttpStatus.OK)
  async changeData(
    @Body() data: UpdateStatisticDto,
    @Param('id') id: string,
  ): Promise<UpdateResult> {
    return await this.statisticService.change(data, id);
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Method: deleting statistic' })
  @ApiOkResponse({
    description: 'Statistic was deleted',
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteData(@Param('id') id: string) {
    return await this.statisticService.deleteOne(id);
  }
}
