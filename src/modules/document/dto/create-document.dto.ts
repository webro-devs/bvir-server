import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
class CreateDocumentDto {
  @ApiProperty({
    description: `title`,
    example: 'Document title',
  })
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @ApiProperty({
    description: `type`,
    example: '',
  })
  @IsNotEmpty()
  @IsString()
  type: string;

  @ApiProperty({
    description: `link`,
    example: 'Document link',
  })
  @IsNotEmpty()
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
    description: `description`,
    example: 'Document description',
  })
  @IsNotEmpty()
  @IsString()
  description: string;
}

export default CreateDocumentDto;
