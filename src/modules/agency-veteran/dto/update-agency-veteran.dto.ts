import { IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
class UpdateAgencyVeteranDto {
  @ApiProperty({
    description: `url`,
    example: 'Agency veteran image url',
  })
  @IsOptional()
  @IsString()
  readonly url: string;

  @ApiProperty({
    description: `nameUz`,
    example: "",
  })
  @IsOptional()
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
  @IsOptional()
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
export default UpdateAgencyVeteranDto;
