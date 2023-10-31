import { IsString, IsOptional, IsNotEmpty, IsObject } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CreateLanguageDto } from 'src/modules/language/dto';
import { Language } from 'src/modules/language/language.entity';
import { InformationType } from 'src/infra/shared/type';
class UpdateInformationDto {
  @ApiProperty({
    description: `url`,
    example: 'information url',
  })
  @IsOptional()
  @IsString()
  url: string;

  @ApiProperty({
    description: `type`,
    example: 'information type',
  })
  @IsOptional()
  @IsString()
  type: InformationType;

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
export default UpdateInformationDto;
