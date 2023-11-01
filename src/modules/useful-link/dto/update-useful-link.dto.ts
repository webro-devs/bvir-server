import { IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
class UpdateUsefulLinkDto {
  @ApiProperty({
    description: `url`,
    example: 'UsefulLink url',
  })
  @IsOptional()
  @IsString()
  url: string;

  @ApiProperty({
    description: `link`,
    example: 'link',
  })
  @IsOptional()
  @IsString()
  link: string;

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
}
export default UpdateUsefulLinkDto;
