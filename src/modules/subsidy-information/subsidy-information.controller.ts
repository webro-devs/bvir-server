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

import { CreateSubsidyInformationDto, UpdateSubsidyInformationDto } from './dto';
import { SubsidyInformation } from './subsidy-information.entity';
import { SubsidyInformationService } from './subsidy-information.service';
import { PaginationDto } from '../../infra/shared/dto';
import { Route } from '../../infra/shared/decorators/route.decorator';
import { Public } from '../auth/decorators/public.decorator';

@ApiTags('Subsidy-Information')
@Controller('subsidy-information')
export class SubsidyInformationController {
  constructor(private readonly subsidyInformationService: SubsidyInformationService) {}

  @Public()
  @Get('/')
  @ApiOperation({ summary: 'Method: returns all regulatory subsidy information' })
  @ApiOkResponse({
    description: 'The subsidy information were returned successfully',
  })
  @HttpCode(HttpStatus.OK)
  async getaAll(@Route() route: string, @Query() query: PaginationDto) {
    return await this.subsidyInformationService.getAll({ ...query, route });
  }

  @Public()
  @Get('/:id')
  @ApiOperation({ summary: 'Method: returns single subsidy information by id' })
  @ApiOkResponse({
    description: 'The subsidy information was returned successfully',
  })
  @HttpCode(HttpStatus.OK)
  async getMe(@Param('id') id: string): Promise<SubsidyInformation> {
    return this.subsidyInformationService.getOne(id);
  }

  @Post('/')
  @ApiOperation({ summary: 'Method: creates new subsidy information' })
  @ApiCreatedResponse({
    description: 'The subsidy information was created successfully',
  })
  @HttpCode(HttpStatus.CREATED)
  async saveData(@Body() data: CreateSubsidyInformationDto): Promise<SubsidyInformation> {
    return await this.subsidyInformationService.create(data);
  }

  @Patch('/:id')
  @ApiOperation({ summary: 'Method: updating subsidy information' })
  @ApiOkResponse({
    description: 'Subsidy information was changed',
  })
  @HttpCode(HttpStatus.OK)
  async changeData(
    @Body() data: UpdateSubsidyInformationDto,
    @Param('id') id: string,
  ): Promise<UpdateResult> {
    return await this.subsidyInformationService.change(data, id);
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Method: deleting subsidy information' })
  @ApiOkResponse({
    description: 'Subsidy information was deleted',
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteData(@Param('id') id: string) {
    return await this.subsidyInformationService.deleteOne(id);
  }
}
