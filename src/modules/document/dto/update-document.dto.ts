import { IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
class UpdateDocumentDto {
  @ApiProperty({
    description: `title`,
    example: 'Document title',
  })
  @IsOptional()
  @IsString()
  readonly title: string;

  @ApiProperty({
    description: `type`,
    example: '',
  })
  @IsOptional()
  @IsString()
  type: string;

  @ApiProperty({
    description: `link`,
    example: 'Document link',
  })
  @IsOptional()
  @IsString()
  link: string;

  @ApiProperty({
    description: `date`,
    example: '2023-10-23',
  })
  @IsOptional()
  @IsString()
  date: string;

  @ApiProperty({
    description: `number`,
    example: 'PPjf15-ll',
  })
  @IsOptional()
  @IsString()
  number: string;
}
export default UpdateDocumentDto;
