import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
class CreateNewsDto {
  @ApiProperty({
    description: `title`,
    example: 'News title',
  })
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @ApiProperty({
    description: `url`,
    example: 'News url',
  })
  @IsNotEmpty()
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
  @IsNotEmpty()
  @IsString()
  description: string;
}

export default CreateNewsDto;
