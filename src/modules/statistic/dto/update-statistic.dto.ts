import { IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
class UpdateStatisticDto {
  @ApiProperty({
    description: `link`,
    example: 'statistic link',
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
export default UpdateStatisticDto;
