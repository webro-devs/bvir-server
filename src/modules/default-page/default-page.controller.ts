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

import { CreateDefaultPageDto, QueryDefaultPageDto, UpdateDefaultPageDto } from './dto';
import { DefaultPage } from './default-page.entity';
import { DefaultPageService } from './default-page.service';
import { Public } from '../auth/decorators/public.decorator';

@ApiTags('Default-Page')
@Controller('default-page')
export class DefaultPageController {
  constructor(private readonly defaultPageService: DefaultPageService) {}

  @Public()
  @Get('/')
  @ApiOperation({ summary: 'Method: returns all default page' })
  @ApiOkResponse({
    description: 'The default page were returned successfully',
  })
  @HttpCode(HttpStatus.OK)
  async getData(@Query() query: QueryDefaultPageDto) {
    return await this.defaultPageService.getByTypeAndSide(query.type,query.side);
  }

  @Public()
  @Get('/:id')
  @ApiOperation({ summary: 'Method: returns single default page by id' })
  @ApiOkResponse({
    description: 'The default page was returned successfully',
  })
  @HttpCode(HttpStatus.OK)
  async getMe(@Param('id') id: string): Promise<DefaultPage> {
    return await this.defaultPageService.getOne(id);
  }

  @Post('/')
  @ApiOperation({ summary: 'Method: creates new default page' })
  @ApiCreatedResponse({
    description: 'The default page was created successfully',
  })
  @HttpCode(HttpStatus.CREATED)
  async saveData(@Body() data: CreateDefaultPageDto): Promise<DefaultPage> {
    return await this.defaultPageService.create(data);
  }

  @Patch('/:id')
  @ApiOperation({ summary: 'Method: updating default page' })
  @ApiOkResponse({
    description: 'Default page was changed',
  })
  @HttpCode(HttpStatus.OK)
  async changeData(
    @Body() data: UpdateDefaultPageDto,
    @Param('id') id: string,
  ){
    return await this.defaultPageService.change(data, id);
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Method: deleting default page' })
  @ApiOkResponse({
    description: 'Default page was deleted',
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteData(@Param('id') id: string) {
    return await this.defaultPageService.deleteOne(id);
  }
}
