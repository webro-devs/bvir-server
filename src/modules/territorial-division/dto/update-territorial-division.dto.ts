import { IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
class UpdateTerritorialDivisionDto {
  @ApiProperty({
    description: `phone`,
    example: '+998 99-999-88-77',
  })
  @IsOptional()
  @IsString()
  phone: string;

  @ApiProperty({
    description: `website`,
    example: 'https://...',
  })
  @IsOptional()
  @IsString()
  website: string;

  @ApiProperty({
    description: `telegram`,
    example: 'telegram',
  })
  @IsOptional()
  @IsString()
  telegram: string;

  @ApiProperty({
    description: `twitter`,
    example: 'twitter',
  })
  @IsOptional()
  @IsString()
  twitter: string;

  @ApiProperty({
    description: `linkedin`,
    example: 'linkedin',
  })
  @IsOptional()
  @IsString()
  linkedin: string;

  @ApiProperty({
    description: `facebook`,
    example: 'facebook',
  })
  @IsOptional()
  @IsString()
  facebook: string;

  @ApiProperty({
    description: `instagram`,
    example: 'instagram',
  })
  @IsOptional()
  @IsString()
  instagram: string;

  @ApiProperty({
    description: `areaUz`,
    example: '...',
  })
  @IsOptional()
  @IsString()
  readonly areaUz: string;

  @ApiProperty({
    description: `areaRu`,
    example: '...',
  })
  @IsOptional()
  @IsString()
  readonly areaRu: string;

  @ApiProperty({
    description: `areaEn`,
    example: '...',
  })
  @IsOptional()
  @IsString()
  readonly areaEn: string;

  @ApiProperty({
    description: `titleUz`,
    example: '...',
  })
  @IsOptional()
  @IsString()
  readonly titleUz: string;

  @ApiProperty({
    description: `titleRu`,
    example: '...',
  })
  @IsOptional()
  @IsString()
  readonly titleRu: string;

  @ApiProperty({
    description: `titleEn`,
    example: '...',
  })
  @IsOptional()
  @IsString()
  readonly titleEn: string;

  @ApiProperty({
    description: `code`,
    example: '...',
  })
  @IsOptional()
  @IsString()
  readonly code: string;
}
export default UpdateTerritorialDivisionDto;
