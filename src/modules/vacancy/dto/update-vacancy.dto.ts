import { IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
class UpdateVacancyDto {
  @ApiProperty({
    description: `titleUz`,
    example: "",
  })
  @IsOptional()
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
  @IsOptional()
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
  @IsOptional()
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
export default UpdateVacancyDto;
