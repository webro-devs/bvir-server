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

import { CreateAgencyDto, UpdateAgencyDto } from './dto';
import { Agency } from './agency.entity';
import { AgencyService } from './agency.service';
import { PaginationDto } from '../../infra/shared/dto';
import { Route } from '../../infra/shared/decorators/route.decorator';
import { Public } from '../auth/decorators/public.decorator';

@ApiTags('Agency')
@Controller('agency')
export class AgencyController {
  constructor(private readonly agencyService: AgencyService) {}

  @Public()
  @Get('/')
  @ApiOperation({ summary: 'Method: returns all agency' })
  @ApiOkResponse({
    description: 'The companies were returned successfully',
  })
  @HttpCode(HttpStatus.OK)
  async getData(@Route() route: string, @Query() query: PaginationDto) {
    return await this.agencyService.getAll({ ...query, route });
  }

  @Public()
  @Get('/:id')
  @ApiOperation({ summary: 'Method: returns single agency by id' })
  @ApiOkResponse({
    description: 'The agency was returned successfully',
  })
  @HttpCode(HttpStatus.OK)
  async getMe(@Param('id') id: string): Promise<Agency> {
    return this.agencyService.getOne(id);
  }

  @Post('/')
  @ApiOperation({ summary: 'Method: creates new agency' })
  @ApiCreatedResponse({
    description: 'The agency was created successfully',
  })
  @HttpCode(HttpStatus.CREATED)
  async saveData(@Body() data: CreateAgencyDto): Promise<Agency> {
    return await this.agencyService.create(data);
  }

  @Patch('/:id')
  @ApiOperation({ summary: 'Method: updating agency' })
  @ApiOkResponse({
    description: 'Agency was changed',
  })
  @HttpCode(HttpStatus.OK)
  async changeData(
    @Body() data: UpdateAgencyDto,
    @Param('id') id: string,
  ){
    return await this.agencyService.change(data, id);
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Method: deleting agency' })
  @ApiOkResponse({
    description: 'Agency was deleted',
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteData(@Param('id') id: string) {
    return await this.agencyService.deleteOne(id);
  }
}
