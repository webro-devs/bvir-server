import { IsNotEmpty, IsObject, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CreateLanguageDto } from 'src/modules/language/dto';
import { InformationTypeEnum } from 'src/infra/shared/enum';
import { InformationType } from 'src/infra/shared/type';
class CreateInformationDto {
  @ApiProperty({
    description: `url`,
    example: 'News url',
  })
  @IsNotEmpty()
  @IsString()
  url: string;

  @ApiProperty({
    description: `type`,
    example: InformationTypeEnum.NEWS,
  })
  @IsNotEmpty()
  @IsString()
  readonly type: InformationType;

  @ApiProperty({
    description: `title`,
    example: {
      uz:"...",
      ru:"...",
      en:"..."
    },
  })
  @IsNotEmpty()
  @IsObject()
  readonly title: CreateLanguageDto;

  @ApiProperty({
    description: `description`,
    example: {
      uz:"...",
      ru:"...",
      en:"..."
    },
  })
  @IsNotEmpty()
  @IsObject()
  readonly description: CreateLanguageDto;
}

export default CreateInformationDto;
