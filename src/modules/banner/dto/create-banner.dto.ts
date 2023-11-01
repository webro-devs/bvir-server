import { IsNotEmpty, IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { BannerTypeEnum } from 'src/infra/shared/enum';
import { BannerType } from 'src/infra/shared/type';
class CreateBannnerDto {
  @ApiProperty({
    description: `url`,
    example: 'banner url',
  })
  @IsNotEmpty()
  @IsString()
  url: string;

  @ApiProperty({
    description: `type`,
    example: BannerTypeEnum.LEFT,
  })
  @IsNotEmpty()
  @IsString()
  readonly type: BannerType;

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

export default CreateBannnerDto;
