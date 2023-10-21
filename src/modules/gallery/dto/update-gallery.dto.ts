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
    description: `description`,
    example: 'News description',
  })
  @IsOptional()
  @IsString()
  description: string;
}
export default UpdateGalleryDto;
