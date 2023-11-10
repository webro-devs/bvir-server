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
import {
  ApiCreatedResponse,
  ApiOkResponse,
  ApiTags,
  ApiOperation,
} from '@nestjs/swagger';

import { CreateManagementApparatusTypeDto, UpdateManagementApparatusTypeDto } from './dto';
import { ManagementApparatusType } from './management-apparatus-type.entity';
import { ManagementApparatusTypeService } from './management-apparatus-type.service';
import { PaginationDto } from '../../infra/shared/dto';
import { Route } from '../../infra/shared/decorators/route.decorator';
import { Public } from '../auth/decorators/public.decorator';

@ApiTags('Menagement-Apparatus-Type')
@Controller('menagement-apparatus-type')
export class ManagementApparatusTypeController {
  constructor(private readonly managementApparatusTypeService: ManagementApparatusTypeService) {}

  @Public()
  @Get('/')
  @ApiOperation({ summary: 'Method: returns all management-apparatus-type' })
  @ApiOkResponse({
    description: 'The management-apparatus-type were returned successfully',
  })
  @HttpCode(HttpStatus.OK)
  async getData(@Route() route: string, @Query() query: PaginationDto) {
    return await this.managementApparatusTypeService.getAll({ ...query, route });
  }

  @Public()
  @Get('/:id')
  @ApiOperation({ summary: 'Method: returns single management-apparatus-type by id' })
  @ApiOkResponse({
    description: 'The management-apparatus-type was returned successfully',
  })
  @HttpCode(HttpStatus.OK)
  async getMe(@Param('id') id: string): Promise<ManagementApparatusType> {
    return this.managementApparatusTypeService.getOne(id);
  }

  @Post('/')
  @ApiOperation({ summary: 'Method: creates new management-apparatus-type' })
  @ApiCreatedResponse({
    description: 'The management-apparatus-type was created successfully',
  })
  @HttpCode(HttpStatus.CREATED)
  async saveData(@Body() data: CreateManagementApparatusTypeDto): Promise<ManagementApparatusType> {
    return await this.managementApparatusTypeService.create(data);
  }

  @Patch('/:id')
  @ApiOperation({ summary: 'Method: updating management-apparatus-type' })
  @ApiOkResponse({
    description: 'management-apparatus-type was changed',
  })
  @HttpCode(HttpStatus.OK)
  async changeData(
    @Body() data: UpdateManagementApparatusTypeDto,
    @Param('id') id: string,
  ){
    return await this.managementApparatusTypeService.change(data, id);
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Method: deleting management-apparatus-type' })
  @ApiOkResponse({
    description: 'management-apparatus-type was deleted',
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteData(@Param('id') id: string) {
    return await this.managementApparatusTypeService.deleteOne(id);
  }
}
