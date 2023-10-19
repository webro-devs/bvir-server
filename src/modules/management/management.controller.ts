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

import { CreateManagementDto, UpdateManagementDto } from './dto';
import { Management } from './management.entity';
import { ManagementService } from './management.service';
import { PaginationDto } from '../../infra/shared/dto';
import { Route } from '../../infra/shared/decorators/route.decorator';

@ApiTags('Management')
@Controller('management')
export class ManagementController {
  constructor(private readonly managementService: ManagementService) {}

  @Get('/')
  @ApiOperation({ summary: 'Method: returns all managements' })
  @ApiOkResponse({
    description: 'The managements were returned successfully',
  })
  @HttpCode(HttpStatus.OK)
  async getData(@Route() route: string, @Query() query: PaginationDto) {
    return await this.managementService.getAll({ ...query, route });
  }

  @Get('/:id')
  @ApiOperation({ summary: 'Method: returns single management by id' })
  @ApiOkResponse({
    description: 'The management was returned successfully',
  })
  @HttpCode(HttpStatus.OK)
  async getMe(@Param('id') id: string): Promise<Management> {
    return this.managementService.getOne(id);
  }

  @Post('/')
  @ApiOperation({ summary: 'Method: creates new management' })
  @ApiCreatedResponse({
    description: 'The management was created successfully',
  })
  @HttpCode(HttpStatus.CREATED)
  async saveData(@Body() data: CreateManagementDto): Promise<Management> {
    return await this.managementService.create(data);
  }

  @Patch('/:id')
  @ApiOperation({ summary: 'Method: updating management' })
  @ApiOkResponse({
    description: 'Management was changed',
  })
  @HttpCode(HttpStatus.OK)
  async changeData(
    @Body() data: UpdateManagementDto,
    @Param('id') id: string,
  ): Promise<UpdateResult> {
    return await this.managementService.change(data, id);
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Method: deleting management' })
  @ApiOkResponse({
    description: 'Management was deleted',
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteData(@Param('id') id: string) {
    return await this.managementService.deleteOne(id);
  }
}