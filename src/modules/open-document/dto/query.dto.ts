import { IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
class QueryOpenDocumentDto {
  @ApiProperty({
    description: `quarter`,
    example: '1',
  })
  @IsOptional()
  @IsString()
  quarter: string;
}

export default QueryOpenDocumentDto;
