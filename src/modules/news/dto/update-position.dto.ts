import { IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { NewsTypeEnum } from '../../../infra/shared/enum';
class UpdateNewsDto {
  @ApiProperty({
    description: `title`,
    example: 'News title',
  })
  @IsOptional()
  @IsString()
  readonly title: string;

  @ApiProperty({
    description: `type`,
    example: NewsTypeEnum.PHOTO,
  })
  @IsOptional()
  @IsString()
  type: NewsTypeEnum;

  @ApiProperty({
    description: `url`,
    example: 'News url',
  })
  @IsOptional()
  @IsString()
  url: string;

  @ApiProperty({
    description: `date`,
    example: '2023-10-23',
  })
  @IsOptional()
  @IsString()
  date: string;

  @ApiProperty({
    description: `description`,
    example: 'News description',
  })
  @IsOptional()
  @IsString()
  description: string;
}
export default UpdateNewsDto;
