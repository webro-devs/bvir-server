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

import { CreateCompanyDto, UpdateCompanyDto } from './dto';
import { Company } from './company.entity';
import { CompanyService } from './company.service';
import { PaginationDto } from '../../infra/shared/dto';
import { Route } from '../../infra/shared/decorators/route.decorator';
import { Public } from '../auth/decorators/public.decorator';

@ApiTags('Company')
@Controller('company')
export class CompanyController {
  constructor(private readonly documentService: CompanyService) {}

  @Public()
  @Get('/')
  @ApiOperation({ summary: 'Method: returns all companies' })
  @ApiOkResponse({
    description: 'The companies were returned successfully',
  })
  @HttpCode(HttpStatus.OK)
  async getData(@Route() route: string, @Query() query: PaginationDto) {
    return await this.documentService.getAll({ ...query, route });
  }

  @Public()
  @Get('/:id')
  @ApiOperation({ summary: 'Method: returns single company by id' })
  @ApiOkResponse({
    description: 'The company was returned successfully',
  })
  @HttpCode(HttpStatus.OK)
  async getMe(@Param('id') id: string): Promise<Company> {
    return this.documentService.getOne(id);
  }

  @Post('/')
  @ApiOperation({ summary: 'Method: creates new company' })
  @ApiCreatedResponse({
    description: 'The company was created successfully',
  })
  @HttpCode(HttpStatus.CREATED)
  async saveData(@Body() data: CreateCompanyDto): Promise<Company> {
    return await this.documentService.create(data);
  }

  @Patch('/:id')
  @ApiOperation({ summary: 'Method: updating company' })
  @ApiOkResponse({
    description: 'Company was changed',
  })
  @HttpCode(HttpStatus.OK)
  async changeData(
    @Body() data: UpdateCompanyDto,
    @Param('id') id: string,
  ): Promise<UpdateResult> {
    return await this.documentService.change(data, id);
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Method: deleting company' })
  @ApiOkResponse({
    description: 'Company was deleted',
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteData(@Param('id') id: string) {
    return await this.documentService.deleteOne(id);
  }
}
