import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
class CreateAgencyDto {
  @ApiProperty({
    description: `url`,
    example: 'Agency image url',
  })
  @IsNotEmpty()
  @IsString()
  readonly url: string;

  @ApiProperty({
    description: `link`,
    example: 'video link',
  })
  @IsNotEmpty()
  @IsString()
  readonly link: string;


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
}

export default CreateAgencyDto;
