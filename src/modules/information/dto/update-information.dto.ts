import { IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
class UpdateNewsDto {
  @ApiProperty({
    description: `title`,
    example: 'News title',
  })
  @IsOptional()
  @IsString()
  readonly title: string;

  @ApiProperty({
    description: `url`,
    example: 'News url',
  })
  @IsOptional()
  @IsString()
  url: string;

  @ApiProperty({
    description: `date`,
    example: '2023-10-23',
  })
  @IsOptional()
  @IsString()
  date: string;

  @ApiProperty({
    description: `description`,
    example: 'News description',
  })
  @IsOptional()
  @IsString()
  description: string;
}
export default UpdateNewsDto;
