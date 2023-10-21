import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
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
    example: 'News url',
  })
  @IsNotEmpty()
  @IsString()
  url: string;

  @ApiProperty({
    description: `description`,
    example: 'Gallery description',
  })
  @IsNotEmpty()
  @IsString()
  description: string;
}

export default CreateGalleryDto;
