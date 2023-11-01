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

import { CreateDocumentDto, UpdateDocumentDto } from './dto';
import { Document } from './document.entity';
import { DocumentService } from './document.service';
import { PaginationDto } from '../../infra/shared/dto';
import { Route } from '../../infra/shared/decorators/route.decorator';
import { Public } from '../auth/decorators/public.decorator';

@ApiTags('Document')
@Controller('document')
export class DocumentController {
  constructor(private readonly documentService: DocumentService) {}

  @Public()
  @Get('/')
  @ApiOperation({ summary: 'Method: returns all regulatory documents' })
  @ApiOkResponse({
    description: 'The regulatory documents were returned successfully',
  })
  @HttpCode(HttpStatus.OK)
  async getRegulatoryDoc(@Route() route: string, @Query() query: PaginationDto) {
    return await this.documentService.getRegulatoryDocument({ ...query, route });
  }

  @Public()
  @Get('/')
  @ApiOperation({ summary: 'Method: returns all open documents' })
  @ApiOkResponse({
    description: 'The open documents were returned successfully',
  })
  @HttpCode(HttpStatus.OK)
  async getOpenDoc(@Route() route: string, @Query() query: PaginationDto) {
    return await this.documentService.getOpenDocument({ ...query, route });
  }

  @Public()
  @Get('/:id')
  @ApiOperation({ summary: 'Method: returns single document by id' })
  @ApiOkResponse({
    description: 'The document was returned successfully',
  })
  @HttpCode(HttpStatus.OK)
  async getMe(@Param('id') id: string): Promise<Document> {
    return this.documentService.getOne(id);
  }

  @Post('/')
  @ApiOperation({ summary: 'Method: creates new document' })
  @ApiCreatedResponse({
    description: 'The document was created successfully',
  })
  @HttpCode(HttpStatus.CREATED)
  async saveData(@Body() data: CreateDocumentDto): Promise<Document> {
    return await this.documentService.create(data);
  }

  @Patch('/:id')
  @ApiOperation({ summary: 'Method: updating document' })
  @ApiOkResponse({
    description: 'Document was changed',
  })
  @HttpCode(HttpStatus.OK)
  async changeData(
    @Body() data: UpdateDocumentDto,
    @Param('id') id: string,
  ): Promise<UpdateResult> {
    return await this.documentService.change(data, id);
  }

  @Delete('/:id')
  @ApiOperation({ summary: 'Method: deleting document' })
  @ApiOkResponse({
    description: 'Document was deleted',
  })
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteData(@Param('id') id: string) {
    return await this.documentService.deleteOne(id);
  }
}
