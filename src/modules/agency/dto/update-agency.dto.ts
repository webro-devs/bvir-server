import { IsString, IsOptional, IsObject } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Language } from 'src/modules/language/language.entity';
class UpdateAgencyDto {
  @ApiProperty({
    description: `url`,
    example: 'Agency image url',
  })
  @IsOptional()
  @IsString()
  url: string;

  @ApiProperty({
    description: `link`,
    example: 'video link',
  })
  @IsOptional()
  @IsString()
  link: string;

  @ApiProperty({
    description: `title`,
    example: {
      id:"uuid",
      uz:"...",
      ru:"...",
      en:"..."
    },
  })
  @IsOptional()
  @IsObject()
  readonly title: Language;

  @ApiProperty({
    description: `description`,
    example: {
      id:"uuid",
      uz:"...",
      ru:"...",
      en:"..."
    },
  })
  @IsOptional()
  @IsObject()
  readonly description: Language;
}
export default UpdateAgencyDto;
