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

import { CreateTerritorialManagementDto, UpdateTerritorialManagementDto } from './dto';
import { TerritorialManagement } from './territorial-management.entity';
import { TerritorialManagementService } from './territorial-management.service';
import { PaginationDto } from '../../infra/shared/dto';
import { Route } from '../../infra/shared/decorators/route.decorator';
import { Public } from '../auth/decorators/public.decorator';

@ApiTags('Territorial-Management')
@Controller('territorial-management')
export class TerritorialManagementController {
  constructor(private readonly territorialManagementService: TerritorialManagementService) {}

  @Public()
  @Get('/')
  @ApiOperation({ summary: 'Method: returns all territorial-management' })
  @ApiOkResponse({
    description: 'The territorial-management were returned successfully',
  })
  @HttpCode(HttpStatus.OK)
  async getAll(@Route() route: string, @Query() query: PaginationDto) {
    return await this.territorialManagementService.getAll({ ...query, route });
  }

  @Public()
  @Get('/:id')
  @ApiOperation({ summary: 'Method: returns single territorial-management by id' })
  @ApiOkResponse({
    description: 'The territorial-management was returned successfully',
  })
  @HttpCode(HttpStatus.OK)
  async getMe(@Param('id') id: string): Promise<TerritorialManagement> {
    return this.territorialManagementService.getOne(id);
  }

  @Post('/')
  @ApiOperation({ summary: 'Method: creates new territorial-management' })
  @ApiCreatedResponse({
    description: 'The territorial-management was created successfully',
  })
  @HttpCode(HttpStatus.CREATED)
  async saveData(@Body() data: CreateTerritorialManagementDto) {
    return await this.territorialManagementService.create(data);
  }

  @Patch('/:id')
  @ApiOperation({ summary: 'Method: updating territorial-management' })
  @ApiOkResponse({
    description: 'Territorial-management was changed',
  })
  @HttpCode(HttpStatus.OK)
  async changeData(
    @Body() data: UpdateTerritorialManagementDto,
    @Param('id') id: string,
  ): Promise<UpdateResult> {
    return await this.territorialManagementService.change(data, id);
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Method: deleting territorial-management' })
  @ApiOkResponse({
    description: 'Territorial-management was deleted',
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteData(@Param('id') id: string) {
    return await this.territorialManagementService.deleteOne(id);
  }
}
