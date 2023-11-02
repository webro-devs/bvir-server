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

import { CreateGalleryDto, UpdateGalleryDto } from './dto';
import { Gallery } from './gallery.entity';
import { GalleryService } from './gallery.service';
import { PaginationDto } from '../../infra/shared/dto';
import { Route } from '../../infra/shared/decorators/route.decorator';
import { Public } from '../auth/decorators/public.decorator';

@ApiTags('Gallery')
@Controller('gallery')
export class GalleryController {
  constructor(private readonly galleryService: GalleryService) {}

  @Public()
  @Get('/')
  @ApiOperation({ summary: 'Method: returns all galleries' })
  @ApiOkResponse({
    description: 'The galleries were returned successfully',
  })
  @HttpCode(HttpStatus.OK)
  async getData(@Route() route: string, @Query() query: PaginationDto) {
    return await this.galleryService.getAll({ ...query, route });
  }

  @Public()
  @Get('/photo')
  @ApiOperation({ summary: 'Method: returns all photo galleries' })
  @ApiOkResponse({
    description: 'The photo galleries were returned successfully',
  })
  @HttpCode(HttpStatus.OK)
  async getPhotGallery(@Route() route: string, @Query() query: PaginationDto) {
    return await this.galleryService.getPhotoGallery({ ...query, route });
  }

  @Public()
  @Get('/video')
  @ApiOperation({ summary: 'Method: returns all video galleries' })
  @ApiOkResponse({
    description: 'The video galleries were returned successfully',
  })
  @HttpCode(HttpStatus.OK)
  async getVideoGallery(@Route() route: string, @Query() query: PaginationDto) {
    return await this.galleryService.getVideoGallery({ ...query, route });
  }

  @Public()
  @Get('/:id')
  @ApiOperation({ summary: 'Method: returns single gallery by id' })
  @ApiOkResponse({
    description: 'The gallery was returned successfully',
  })
  @HttpCode(HttpStatus.OK)
  async getMe(@Param('id') id: string): Promise<Gallery> {
    return this.galleryService.getOne(id);
  }

  @Post('/')
  @ApiOperation({ summary: 'Method: creates new gallery' })
  @ApiCreatedResponse({
    description: 'The gallery was created successfully',
  })
  @HttpCode(HttpStatus.CREATED)
  async saveData(@Body() data: CreateGalleryDto): Promise<Gallery> {
    return await this.galleryService.create(data);
  }

  @Patch('/:id')
  @ApiOperation({ summary: 'Method: updating gallery' })
  @ApiOkResponse({
    description: 'Gallery was changed',
  })
  @HttpCode(HttpStatus.OK)
  async changeData(
    @Body() data: UpdateGalleryDto,
    @Param('id') id: string,
  ): Promise<UpdateResult> {
    return await this.galleryService.change(data, id);
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Method: deleting gallery' })
  @ApiOkResponse({
    description: 'Gallery was deleted',
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteData(@Param('id') id: string) {
    return await this.galleryService.deleteOne(id);
  }
}
