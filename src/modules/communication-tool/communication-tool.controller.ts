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

import { CreateCommunicationToolDto, UpdateCommunicationToolDto } from './dto';
import { CommunicationTool } from './communication-tool.entity';
import { CommunicationToolService } from './communication-tool.service';
import { PaginationDto } from '../../infra/shared/dto';
import { Route } from '../../infra/shared/decorators/route.decorator';
import { Public } from '../auth/decorators/public.decorator';

@ApiTags('Communication-Tool')
@Controller('communication-tool')
export class CommunicationToolController {
  constructor(private readonly communicationToolService: CommunicationToolService) {}

  @Public()
  @Get('/')
  @ApiOperation({ summary: 'Method: returns all communication-tool' })
  @ApiOkResponse({
    description: 'The communication-tool were returned successfully',
  })
  @HttpCode(HttpStatus.OK)
  async getData(@Route() route: string, @Query() query: PaginationDto) {
    return await this.communicationToolService.getAll({ ...query, route });
  }

  @Public()
  @Get('/:id')
  @ApiOperation({ summary: 'Method: returns single communication-tool by id' })
  @ApiOkResponse({
    description: 'The communication-tool was returned successfully',
  })
  @HttpCode(HttpStatus.OK)
  async getMe(@Param('id') id: string): Promise<CommunicationTool> {
    return this.communicationToolService.getOne(id);
  }

  @Post('/')
  @ApiOperation({ summary: 'Method: creates new communication-tool' })
  @ApiCreatedResponse({
    description: 'The communication-tool was created successfully',
  })
  @HttpCode(HttpStatus.CREATED)
  async saveData(@Body() data: CreateCommunicationToolDto): Promise<CommunicationTool> {
    return await this.communicationToolService.create(data);
  }

  @Patch('/:id')
  @ApiOperation({ summary: 'Method: updating communication-tool' })
  @ApiOkResponse({
    description: 'Communication-tool was changed',
  })
  @HttpCode(HttpStatus.OK)
  async changeData(
    @Body() data: UpdateCommunicationToolDto,
    @Param('id') id: string,
  ){
    return await this.communicationToolService.change(data, id);
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Method: deleting communication-tool' })
  @ApiOkResponse({
    description: 'Communication-tool was deleted',
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteData(@Param('id') id: string) {
    return await this.communicationToolService.deleteOne(id);
  }
}
