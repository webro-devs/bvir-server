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

import { CreateTerritorialDivisionDto, UpdateTerritorialDivisionDto } from './dto';
import { TerritorialDivision } from './territorial-division.entity';
import { TerritorialDivisionService } from './territorial-division.service';
import { PaginationDto } from '../../infra/shared/dto';
import { Route } from '../../infra/shared/decorators/route.decorator';
import { Public } from '../auth/decorators/public.decorator';

@ApiTags('Territorial-Division')
@Controller('territorial-division')
export class TerritorialDivisionController {
  constructor(private readonly territorialDivisionService: TerritorialDivisionService) {}

  @Public()
  @Get('/')
  @ApiOperation({ summary: 'Method: returns all territorial-division' })
  @ApiOkResponse({
    description: 'The territorial-division were returned successfully',
  })
  @HttpCode(HttpStatus.OK)
  async getAll(@Route() route: string, @Query() query: PaginationDto) {
    return await this.territorialDivisionService.getAll({ ...query, route });
  }

  @Public()
  @Get('/:id')
  @ApiOperation({ summary: 'Method: returns single territorial-division by id' })
  @ApiOkResponse({
    description: 'The territorial-division was returned successfully',
  })
  @HttpCode(HttpStatus.OK)
  async getMe(@Param('id') id: string): Promise<TerritorialDivision> {
    return this.territorialDivisionService.getOne(id);
  }

  @Post('/')
  @ApiOperation({ summary: 'Method: creates new territorial-division' })
  @ApiCreatedResponse({
    description: 'The territorial-division was created successfully',
  })
  @HttpCode(HttpStatus.CREATED)
  async saveData(@Body() data: CreateTerritorialDivisionDto): Promise<TerritorialDivision> {
    return await this.territorialDivisionService.create(data);
  }

  @Patch('/:id')
  @ApiOperation({ summary: 'Method: updating territorial-division' })
  @ApiOkResponse({
    description: 'Territorial-division was changed',
  })
  @HttpCode(HttpStatus.OK)
  async changeData(
    @Body() data: UpdateTerritorialDivisionDto,
    @Param('id') id: string,
  ): Promise<UpdateResult> {
    return await this.territorialDivisionService.change(data, id);
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Method: deleting territorial-division' })
  @ApiOkResponse({
    description: 'Territorial-division was deleted',
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteData(@Param('id') id: string) {
    return await this.territorialDivisionService.deleteOne(id);
  }
}
