import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
class CreateVacancyDto {
  @ApiProperty({
    description: `title`,
    example: 'Vacancy title',
  })
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @ApiProperty({
    description: `price`,
    example: '2000',
  })
  @IsNotEmpty()
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
  @IsNotEmpty()
  @IsString()
  readonly startTime: string;

  @ApiProperty({
    description: `end time`,
    example: '18:00',
  })
  @IsNotEmpty()
  @IsString()
  readonly endTime: string;

  @ApiProperty({
    description: `address`,
    example: 'Uol street',
  })
  @IsNotEmpty()
  @IsString()
  readonly address: string;

  @ApiProperty({
    description: `description`,
    example: 'Vacancy description',
  })
  @IsNotEmpty()
  @IsString()
  readonly description: string;
}

export default CreateVacancyDto;
