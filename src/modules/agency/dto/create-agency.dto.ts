import { IsNotEmpty, IsObject, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { CreateLanguageDto } from 'src/modules/language/dto';
class CreateAgencyDto {
  @ApiProperty({
    description: `url`,
    example: 'Agency image url',
  })
  @IsNotEmpty()
  @IsString()
  readonly url: string;

  @ApiProperty({
    description: `link`,
    example: 'video link',
  })
  @IsNotEmpty()
  @IsString()
  readonly link: string;


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

export default CreateAgencyDto;
