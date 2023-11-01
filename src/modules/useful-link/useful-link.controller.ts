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

import { CreateUsefulLinkDto, UpdateUsefulLinkDto } from './dto';
import { UsefulLink } from './useful-link.entity';
import { UsefulLinkService } from './useful-link.service';
import { PaginationDto } from '../../infra/shared/dto';
import { Route } from '../../infra/shared/decorators/route.decorator';
import { Public } from '../auth/decorators/public.decorator';

@ApiTags('Useful-Link')
@Controller('useful-link')
export class UsefulLinkController {
  constructor(private readonly usefulLinkService: UsefulLinkService) {}

  @Public()
  @Get('/')
  @ApiOperation({ summary: 'Method: returns all useful-link' })
  @ApiOkResponse({
    description: 'The useful-link were returned successfully',
  })
  @HttpCode(HttpStatus.OK)
  async getData(@Route() route: string, @Query() query: PaginationDto) {
    return await this.usefulLinkService.getAll({ ...query, route });
  }

  @Public()
  @Get('/:id')
  @ApiOperation({ summary: 'Method: returns single useful-link by id' })
  @ApiOkResponse({
    description: 'The useful-link was returned successfully',
  })
  @HttpCode(HttpStatus.OK)
  async getMe(@Param('id') id: string): Promise<UsefulLink> {
    return this.usefulLinkService.getOne(id);
  }

  @Post('/')
  @ApiOperation({ summary: 'Method: creates new useful-link' })
  @ApiCreatedResponse({
    description: 'The useful-link was created successfully',
  })
  @HttpCode(HttpStatus.CREATED)
  async saveData(@Body() data: CreateUsefulLinkDto): Promise<UsefulLink> {
    return await this.usefulLinkService.create(data);
  }

  @Patch('/:id')
  @ApiOperation({ summary: 'Method: updating useful-link' })
  @ApiOkResponse({
    description: 'Useful-link was changed',
  })
  @HttpCode(HttpStatus.OK)
  async changeData(
    @Body() data: UpdateUsefulLinkDto,
    @Param('id') id: string,
  ){
    return await this.usefulLinkService.change(data, id);
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Method: deleting useful-link' })
  @ApiOkResponse({
    description: 'Useful-link was deleted',
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteData(@Param('id') id: string) {
    return await this.usefulLinkService.deleteOne(id);
  }
}
