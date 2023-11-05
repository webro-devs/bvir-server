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

import { CreateAgencyVeteranDto, UpdateAgencyVeteranDto } from './dto';
import { AgencyVeteran } from './agency-veteran.entity';
import { AgencyVeteranService } from './agency-veteran.service';
import { PaginationDto } from '../../infra/shared/dto';
import { Route } from '../../infra/shared/decorators/route.decorator';
import { Public } from '../auth/decorators/public.decorator';

@ApiTags('Agency-Veteran')
@Controller('agency-veteran')
export class AgencyVeteranController {
  constructor(private readonly agencyService: AgencyVeteranService) {}

  @Public()
  @Get('/')
  @ApiOperation({ summary: 'Method: returns all agency veterans' })
  @ApiOkResponse({
    description: 'The agency veterans were returned successfully',
  })
  @HttpCode(HttpStatus.OK)
  async getData(@Route() route: string, @Query() query: PaginationDto) {
    return await this.agencyService.getAll({ ...query, route });
  }

  @Public()
  @Get('/:id')
  @ApiOperation({ summary: 'Method: returns single agency veteran by id' })
  @ApiOkResponse({
    description: 'The agency veteran was returned successfully',
  })
  @HttpCode(HttpStatus.OK)
  async getMe(@Param('id') id: string): Promise<AgencyVeteran> {
    return this.agencyService.getOne(id);
  }

  @Post('/')
  @ApiOperation({ summary: 'Method: creates new agency veteran' })
  @ApiCreatedResponse({
    description: 'The agency veteran was created successfully',
  })
  @HttpCode(HttpStatus.CREATED)
  async saveData(@Body() data: CreateAgencyVeteranDto): Promise<AgencyVeteran> {
    return await this.agencyService.create(data);
  }

  @Patch('/:id')
  @ApiOperation({ summary: 'Method: updating agency veteran' })
  @ApiOkResponse({
    description: 'Agency veteran was changed',
  })
  @HttpCode(HttpStatus.OK)
  async changeData(
    @Body() data: UpdateAgencyVeteranDto,
    @Param('id') id: string,
  ){
    return await this.agencyService.change(data, id);
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Method: deleting agency veteran' })
  @ApiOkResponse({
    description: 'Agency veteran was deleted',
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteData(@Param('id') id: string) {
    return await this.agencyService.deleteOne(id);
  }
}
