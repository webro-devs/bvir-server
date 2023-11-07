import { IsString, IsOptional, IsArray } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { GalleryTypeEnum } from '../../../infra/shared/enum';
import { GalleryType } from 'src/infra/shared/type';
class UpdateGalleryDto {
  @ApiProperty({
    description: `type`,
    example: GalleryTypeEnum.PHOTO,
  })
  @IsOptional()
  @IsString()
  type: GalleryType;

  @ApiProperty({
    description: `url`,
    example: ['','']
  })
  @IsOptional()
  @IsArray()
  url: string[];

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
export default UpdateGalleryDto;
