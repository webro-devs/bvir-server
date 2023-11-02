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
} from '@nestjs/common';
import { UpdateResult } from 'typeorm';
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
  ApiOperation,
} from '@nestjs/swagger';

import { CreateAgencyStatisticDto, UpdateAgencyStatisticDto } from './dto';
import { AgencyStatistic } from './agency-statistic.entity';
import { AgencyStatisticService } from './agency-statistic.service';
import { Public } from '../auth/decorators/public.decorator';

@ApiTags('Agency-Statistic')
@Controller('agency-statistic')
export class AgencyStatisticController {
  constructor(private readonly agencyStatisticService: AgencyStatisticService) {}

  @Public()
  @Get('/')
  @ApiOperation({ summary: 'Method: returns agency statistic' })
  @ApiOkResponse({
    description: 'The agency statistic were returned successfully',
  })
  @HttpCode(HttpStatus.OK)
  async getaAll() {
    return await this.agencyStatisticService.getData()
  }

  @Post('/')
  @ApiOperation({ summary: 'Method: creates new agency statistic' })
  @ApiCreatedResponse({
    description: 'The agency statistic was created successfully',
  })
  @HttpCode(HttpStatus.CREATED)
  async saveData(@Body() data: CreateAgencyStatisticDto): Promise<AgencyStatistic> {
    return await this.agencyStatisticService.create(data);
  }

  @Patch('/:id')
  @ApiOperation({ summary: 'Method: updating agency statistic' })
  @ApiOkResponse({
    description: 'Agency statistic was changed',
  })
  @HttpCode(HttpStatus.OK)
  async changeData(
    @Body() data: UpdateAgencyStatisticDto,
    @Param('id') id: string,
  ): Promise<UpdateResult> {
    return await this.agencyStatisticService.change(data, id);
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Method: deleting agency statistic' })
  @ApiOkResponse({
    description: 'Agency statistic was deleted',
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteData(@Param('id') id: string) {
    return await this.agencyStatisticService.deleteOne(id);
  }
}
