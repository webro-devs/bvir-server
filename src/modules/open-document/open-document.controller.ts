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

import { CreateOpenDocumentDto, UpdateOpenDocumentDto } from './dto';
import { OpenDocument } from './open-document.entity';
import { OpenDocumentService } from './open-document.service';
import { PaginationDto } from '../../infra/shared/dto';
import { Route } from '../../infra/shared/decorators/route.decorator';
import { Public } from '../auth/decorators/public.decorator';

@ApiTags('Open-Document')
@Controller('open-document')
export class OpenDocumentController {
  constructor(private readonly openDocumentService: OpenDocumentService) {}

  @Public()
  @Get('/')
  @ApiOperation({ summary: 'Method: returns all open documents' })
  @ApiOkResponse({
    description: 'The regulatory documents were returned successfully',
  })
  @HttpCode(HttpStatus.OK)
  async getAll(@Route() route: string, @Query() query: PaginationDto) {
    return await this.openDocumentService.getAll({ ...query, route });
  }

  @Public()
  @Get('/budget-legislation')
  @ApiOperation({ summary: 'Method: returns all budget legislation information documents' })
  @ApiOkResponse({
    description: 'The regulatory documents were returned successfully',
  })
  @HttpCode(HttpStatus.OK)
  async getRegulatoryDoc(@Route() route: string, @Query() query: PaginationDto) {
    return await this.openDocumentService.getBudgetOpenDocument({ ...query, route });
  }

  @Public()
  @Get('/organizations-included')
  @ApiOperation({ summary: 'Method: returns all organizations included documents' })
  @ApiOkResponse({
    description: 'The online-credit documents were returned successfully',
  })
  @HttpCode(HttpStatus.OK)
  async getOnlineCreditDoc(@Route() route: string, @Query() query: PaginationDto) {
    return await this.openDocumentService.getOrganizationOpenDocument({ ...query, route });
  }

  @Public()
  @Get('/fp')
  @ApiOperation({ summary: 'Method: returns all PF - 6742 documents' })
  @ApiOkResponse({
    description: 'The subsidy documents were returned successfully',
  })
  @HttpCode(HttpStatus.OK)
  async getSubsidyDoc(@Route() route: string, @Query() query: PaginationDto) {
    return await this.openDocumentService.getFpOpenDocument({ ...query, route });
  }

  @Public()
  @Get('/:id')
  @ApiOperation({ summary: 'Method: returns single document by id' })
  @ApiOkResponse({
    description: 'The document was returned successfully',
  })
  @HttpCode(HttpStatus.OK)
  async getMe(@Param('id') id: string): Promise<OpenDocument> {
    return this.openDocumentService.getOne(id);
  }

  @Post('/')
  @ApiOperation({ summary: 'Method: creates new document' })
  @ApiCreatedResponse({
    description: 'The document was created successfully',
  })
  @HttpCode(HttpStatus.CREATED)
  async saveData(@Body() data: CreateOpenDocumentDto): Promise<OpenDocument> {
    return await this.openDocumentService.create(data);
  }

  @Patch('/:id')
  @ApiOperation({ summary: 'Method: updating document' })
  @ApiOkResponse({
    description: 'Document was changed',
  })
  @HttpCode(HttpStatus.OK)
  async changeData(
    @Body() data: UpdateOpenDocumentDto,
    @Param('id') id: string,
  ): Promise<UpdateResult> {
    return await this.openDocumentService.change(data, id);
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Method: deleting document' })
  @ApiOkResponse({
    description: 'Document was deleted',
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteData(@Param('id') id: string) {
    return await this.openDocumentService.deleteOne(id);
  }
}
