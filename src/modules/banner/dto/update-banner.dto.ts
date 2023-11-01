import { IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { BannerType, InformationType } from 'src/infra/shared/type';
import { BannerTypeEnum } from 'src/infra/shared/enum';
class UpdateInformationDto {
  @ApiProperty({
    description: `url`,
    example: 'banner url',
  })
  @IsOptional()
  @IsString()
  url: string;

  @ApiProperty({
    description: `type`,
    example: BannerTypeEnum.RIGHT,
  })
  @IsOptional()
  @IsString()
  type: BannerType;

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
}
export default UpdateInformationDto;
