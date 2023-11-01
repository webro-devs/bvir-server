import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
class CreateVacancyDto {
  @ApiProperty({
    description: `titleUz`,
    example: "",
  })
  @IsNotEmpty()
  @IsString()
  readonly titleUz: string;

  @ApiProperty({
    description: `titleRu`,
    example: "",
  })
  @IsOptional()
  @IsString()
  readonly titleRu: string;

  @ApiProperty({
    description: `titleEn`,
    example: "",
  })
  @IsOptional()
  @IsString()
  readonly titleEn: string;

  @ApiProperty({
    description: `descriptionUz`,
    example: "",
  })
  @IsNotEmpty()
  @IsString()
  readonly descriptionUz: string;

  @ApiProperty({
    description: `descriptionRu`,
    example: "",
  })
  @IsOptional()
  @IsString()
  readonly descriptionRu: string;

  @ApiProperty({
    description: `descriptionEn`,
    example: "",
  })
  @IsOptional()
  @IsString()
  readonly descriptionEn: string;

  @ApiProperty({
    description: `salaryUz`,
    example: "",
  })
  @IsNotEmpty()
  @IsString()
  readonly salaryUz: string;

  @ApiProperty({
    description: `salaryRu`,
    example: "",
  })
  @IsOptional()
  @IsString()
  readonly salaryRu: string;

  @ApiProperty({
    description: `salaryEn`,
    example: "",
  })
  @IsOptional()
  @IsString()
  readonly salaryEn: string;
}

export default CreateVacancyDto;
