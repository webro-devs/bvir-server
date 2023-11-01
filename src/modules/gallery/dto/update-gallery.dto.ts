import { IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { GalleryTypeEnum } from '../../../infra/shared/enum';
class UpdateGalleryDto {
  @ApiProperty({
    description: `type`,
    example: GalleryTypeEnum.PHOTO,
  })
  @IsOptional()
  @IsString()
  type: GalleryTypeEnum;

  @ApiProperty({
    description: `url`,
    example: 'News url',
  })
  @IsOptional()
  @IsString()
  url: string;

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
