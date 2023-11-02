import { IsArray, IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { GalleryTypeEnum } from '../../../infra/shared/enum';
class CreateGalleryDto {
  @ApiProperty({
    description: `type`,
    example: GalleryTypeEnum.PHOTO,
  })
  @IsNotEmpty()
  @IsString()
  type: GalleryTypeEnum;

  @ApiProperty({
    description: `url`,
    example: ['',''],
  })
  @IsNotEmpty()
  @IsArray()
  url: string[];

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

export default CreateGalleryDto;
