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

import { CreateVacancyDto, UpdateVacancyDto } from './dto';
import { Vacancy } from './vacancy.entity';
import { VacancyService } from './vacancy.service';
import { PaginationDto } from '../../infra/shared/dto';
import { Route } from '../../infra/shared/decorators/route.decorator';
import { Public } from '../auth/decorators/public.decorator';

@ApiTags('Vacancy')
@Controller('vacancy')
export class VacancyController {
  constructor(private readonly vacancyService: VacancyService) {}

  @Public()
  @Get('/')
  @ApiOperation({ summary: 'Method: returns all vacancies' })
  @ApiOkResponse({
    description: 'The vacancies were returned successfully',
  })
  @HttpCode(HttpStatus.OK)
  async getData(@Route() route: string, @Query() query: PaginationDto) {
    return await this.vacancyService.getAll({ ...query, route });
  }

  @Public()
  @Get('/:id')
  @ApiOperation({ summary: 'Method: returns single vacancy by id' })
  @ApiOkResponse({
    description: 'The vacancy was returned successfully',
  })
  @HttpCode(HttpStatus.OK)
  async getMe(@Param('id') id: string): Promise<Vacancy> {
    return this.vacancyService.getOne(id);
  }

  @Post('/')
  @ApiOperation({ summary: 'Method: creates new vacancy' })
  @ApiCreatedResponse({
    description: 'The vacancy was created successfully',
  })
  @HttpCode(HttpStatus.CREATED)
  async saveData(@Body() data: CreateVacancyDto): Promise<Vacancy> {
    return await this.vacancyService.create(data);
  }

  @Patch('/:id')
  @ApiOperation({ summary: 'Method: updating vacancy' })
  @ApiOkResponse({
    description: 'Vacancy was changed',
  })
  @HttpCode(HttpStatus.OK)
  async changeData(
    @Body() positionData: UpdateVacancyDto,
    @Param('id') id: string,
  ): Promise<UpdateResult> {
    return await this.vacancyService.change(positionData, id);
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Method: deleting vacancy' })
  @ApiOkResponse({
    description: 'Vacancy was deleted',
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteData(@Param('id') id: string) {
    return await this.vacancyService.deleteOne(id);
  }
}
