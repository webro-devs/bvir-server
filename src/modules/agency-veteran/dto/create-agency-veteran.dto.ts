import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
class CreateAgencyVeteranDto {
  @ApiProperty({
    description: `url`,
    example: 'Agency veteran image url',
  })
  @IsNotEmpty()
  @IsString()
  readonly url: string;

  @ApiProperty({
    description: `nameUz`,
    example: "",
  })
  @IsNotEmpty()
  @IsString()
  readonly nameUz: string;

  @ApiProperty({
    description: `nameRu`,
    example: "",
  })
  @IsOptional()
  @IsString()
  readonly nameRu: string;

  @ApiProperty({
    description: `nameEn`,
    example: "",
  })
  @IsOptional()
  @IsString()
  readonly nameEn: string;

  @ApiProperty({
    description: `positionUz`,
    example: "",
  })
  @IsNotEmpty()
  @IsString()
  readonly positionUz: string;

  @ApiProperty({
    description: `positionRu`,
    example: "",
  })
  @IsOptional()
  @IsString()
  readonly positionRu: string;

  @ApiProperty({
    description: `positionEn`,
    example: "",
  })
  @IsOptional()
  @IsString()
  readonly positionEn: string;
}

export default CreateAgencyVeteranDto;
