import { IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
class UpdateDocumentDto {
  @ApiProperty({
    description: `title`,
    example: 'Vacancy title',
  })
  @IsOptional()
  @IsString()
  readonly title: string;

  @ApiProperty({
    description: `price`,
    example: '2000',
  })
  @IsOptional()
  @IsString()
  readonly price: string;

  @ApiProperty({
    description: `date`,
    example: '2023-10-23',
  })
  @IsOptional()
  @IsString()
  readonly date: string;

  @ApiProperty({
    description: `start time`,
    example: '9:00',
  })
  @IsOptional()
  @IsString()
  readonly startTime: string;

  @ApiProperty({
    description: `end time`,
    example: '18:00',
  })
  @IsOptional()
  @IsString()
  readonly endTime: string;

  @ApiProperty({
    description: `address`,
    example: 'Uol street',
  })
  @IsOptional()
  @IsString()
  readonly address: string;

  @ApiProperty({
    description: `description`,
    example: 'Vacancy description',
  })
  @IsOptional()
  @IsString()
  readonly description: string;
}
export default UpdateDocumentDto;
