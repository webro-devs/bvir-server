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

import { CreateBannerDto, UpdateBannerDto } from './dto';
import { Banner } from './banner.entity';
import { BannerService } from './banner.service';
import { PaginationDto } from '../../infra/shared/dto';
import { Route } from '../../infra/shared/decorators/route.decorator';
import { Public } from '../auth/decorators/public.decorator';

@ApiTags('Banner')
@Controller('banner')
export class BannerController {
  constructor(private readonly bannerService: BannerService) {}

  @Public()
  @Get('/')
  @ApiOperation({ summary: 'Method: returns all banners' })
  @ApiOkResponse({
    description: 'The banners were returned successfully',
  })
  @HttpCode(HttpStatus.OK)
  async getData(@Route() route: string, @Query() query: PaginationDto) {
    return await this.bannerService.getAll({ ...query, route });
  }


  @Public()
  @Get('/right')
  @ApiOperation({ summary: 'Method: returns right banners' })
  @ApiOkResponse({
    description: 'The right banners was returned successfully',
  })
  @HttpCode(HttpStatus.OK)
  async getAdditionalPages(@Route() route: string, @Query() query: PaginationDto){
    return await this.bannerService.getRightBanner({ ...query, route });
  }

  @Public()
  @Get('/left')
  @ApiOperation({ summary: 'Method: returns left banners' })
  @ApiOkResponse({
    description: 'The left banners was returned successfully',
  })
  @HttpCode(HttpStatus.OK)
  async getAnnouncements(@Route() route: string, @Query() query: PaginationDto){
    return await this.bannerService.getLeftBanner({ ...query, route });
  }

  @Public()
  @Get('/:id')
  @ApiOperation({ summary: 'Method: returns single banner by id' })
  @ApiOkResponse({
    description: 'The banner was returned successfully',
  })
  @HttpCode(HttpStatus.OK)
  async getMe(@Param('id') id: string): Promise<Banner> {
    return await this.bannerService.getOne(id);
  }

  @Post('/')
  @ApiOperation({ summary: 'Method: creates new banner' })
  @ApiCreatedResponse({
    description: 'The banner was created successfully',
  })
  @HttpCode(HttpStatus.CREATED)
  async saveData(@Body() data: CreateBannerDto): Promise<Banner> {
    return await this.bannerService.create(data);
  }

  @Patch('/:id')
  @ApiOperation({ summary: 'Method: updating banner' })
  @ApiOkResponse({
    description: 'Banner was changed',
  })
  @HttpCode(HttpStatus.OK)
  async changeData(
    @Body() data: UpdateBannerDto,
    @Param('id') id: string,
  ){
    return await this.bannerService.change(data, id);
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Method: deleting banner' })
  @ApiOkResponse({
    description: 'Banner was deleted',
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteData(@Param('id') id: string) {
    return await this.bannerService.deleteOne(id);
  }
}
