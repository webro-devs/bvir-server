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

import { CreateInteractiveServiceDto, UpdateInteractiveServiceDto } from './dto';
import { InteractiveService } from './interactive-service.entity';
import { InteractiveServiceService } from './interactive-service.service';
import { PaginationDto } from '../../infra/shared/dto';
import { Route } from '../../infra/shared/decorators/route.decorator';
import { Public } from '../auth/decorators/public.decorator';

@ApiTags('Interactive-Service')
@Controller('interactive-service')
export class InteractiveServiceController {
  constructor(private readonly interactiveServiceServiceService: InteractiveServiceService) {}

  @Public()
  @Get('/')
  @ApiOperation({ summary: 'Method: returns all interactive-services' })
  @ApiOkResponse({
    description: 'The interactive-service were returned successfully',
  })
  @HttpCode(HttpStatus.OK)
  async getData(@Route() route: string, @Query() query: PaginationDto) {
    return await this.interactiveServiceServiceService.getAll({ ...query, route });
  }

  @Public()
  @Get('/:id')
  @ApiOperation({ summary: 'Method: returns single interactive-service by id' })
  @ApiOkResponse({
    description: 'The interactive-service was returned successfully',
  })
  @HttpCode(HttpStatus.OK)
  async getMe(@Param('id') id: string): Promise<InteractiveService> {
    return this.interactiveServiceServiceService.getOne(id);
  }

  @Post('/')
  @ApiOperation({ summary: 'Method: creates new interactive-service' })
  @ApiCreatedResponse({
    description: 'The interactive-service was created successfully',
  })
  @HttpCode(HttpStatus.CREATED)
  async saveData(@Body() data: CreateInteractiveServiceDto): Promise<InteractiveService> {
    return await this.interactiveServiceServiceService.create(data);
  }

  @Patch('/:id')
  @ApiOperation({ summary: 'Method: updating interactive-service' })
  @ApiOkResponse({
    description: 'interactive-service was changed',
  })
  @HttpCode(HttpStatus.OK)
  async changeData(
    @Body() data: UpdateInteractiveServiceDto,
    @Param('id') id: string,
  ): Promise<UpdateResult> {
    return await this.interactiveServiceServiceService.change(data, id);
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Method: deleting interactive-service' })
  @ApiOkResponse({
    description: 'interactive-service was deleted',
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteData(@Param('id') id: string) {
    return await this.interactiveServiceServiceService.deleteOne(id);
  }
}
