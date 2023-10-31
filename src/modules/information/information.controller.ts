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

import { CreateInformationDto, UpdateInformationDto } from './dto';
import { Information } from './information.entity';
import { InformationService } from './information.service';
import { PaginationDto } from '../../infra/shared/dto';
import { Route } from '../../infra/shared/decorators/route.decorator';
import { Public } from '../auth/decorators/public.decorator';

@ApiTags('Information')
@Controller('information')
export class InformationController {
  constructor(private readonly informationService: InformationService) {}

  @Public()
  @Get('/')
  @ApiOperation({ summary: 'Method: returns all information' })
  @ApiOkResponse({
    description: 'The inormation were returned successfully',
  })
  @HttpCode(HttpStatus.OK)
  async getData(@Route() route: string, @Query() query: PaginationDto) {
    return await this.informationService.getAll({ ...query, route });
  }

  @Public()
  @Get('/news')
  @ApiOperation({ summary: 'Method: returns news' })
  @ApiOkResponse({
    description: 'The news was returned successfully',
  })
  @HttpCode(HttpStatus.OK)
  async getNews(@Route() route: string, @Query() query: PaginationDto){
    return await this.informationService.getNews({ ...query, route });
  }

  @Public()
  @Get('/breaking-news')
  @ApiOperation({ summary: 'Method: returns breaking-news' })
  @ApiOkResponse({
    description: 'The breaking-news was returned successfully',
  })
  @HttpCode(HttpStatus.OK)
  async getBreakingNews(@Route() route: string, @Query() query: PaginationDto){
    return await this.informationService.getBreakingNews({ ...query, route });
  }

  @Public()
  @Get('/events')
  @ApiOperation({ summary: 'Method: returns events' })
  @ApiOkResponse({
    description: 'The events was returned successfully',
  })
  @HttpCode(HttpStatus.OK)
  async getEvents(@Route() route: string, @Query() query: PaginationDto){
    return await this.informationService.getEvents({ ...query, route });
  }

  @Public()
  @Get('/announcements')
  @ApiOperation({ summary: 'Method: returns announcements' })
  @ApiOkResponse({
    description: 'The announcements was returned successfully',
  })
  @HttpCode(HttpStatus.OK)
  async getAnnouncements(@Route() route: string, @Query() query: PaginationDto){
    return await this.informationService.getAnnouncement({ ...query, route });
  }

  @Public()
  @Get('/additional-pages')
  @ApiOperation({ summary: 'Method: returns additional-pages' })
  @ApiOkResponse({
    description: 'The additional-pages was returned successfully',
  })
  @HttpCode(HttpStatus.OK)
  async getAdditionalPages(@Route() route: string, @Query() query: PaginationDto){
    return await this.informationService.getAdditionalPage({ ...query, route });
  }

  @Public()
  @Get('/:id')
  @ApiOperation({ summary: 'Method: returns single information by id' })
  @ApiOkResponse({
    description: 'The information was returned successfully',
  })
  @HttpCode(HttpStatus.OK)
  async getMe(@Param('id') id: string): Promise<Information> {
    return await this.informationService.getOne(id);
  }

  @Post('/')
  @ApiOperation({ summary: 'Method: creates new information' })
  @ApiCreatedResponse({
    description: 'The information was created successfully',
  })
  @HttpCode(HttpStatus.CREATED)
  async saveData(@Body() data: CreateInformationDto): Promise<Information> {
    return await this.informationService.create(data);
  }

  @Patch('/:id')
  @ApiOperation({ summary: 'Method: updating information' })
  @ApiOkResponse({
    description: 'Information was changed',
  })
  @HttpCode(HttpStatus.OK)
  async changeData(
    @Body() data: UpdateInformationDto,
    @Param('id') id: string,
  ){
    return await this.informationService.change(data, id);
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Method: deleting information' })
  @ApiOkResponse({
    description: 'Information was deleted',
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteData(@Param('id') id: string) {
    return await this.informationService.deleteOne(id);
  }
}
