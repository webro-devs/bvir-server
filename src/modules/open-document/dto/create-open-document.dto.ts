import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { OpenDocumentType } from 'src/infra/shared/type';
import {  OpenDocumentTypeEnum } from 'src/infra/shared/enum';
class CreateOpenDocumentDto {
  @ApiProperty({
    description: `type`,
    example: OpenDocumentTypeEnum.ORGANIZATION_INCLUDED,
  })
  @IsNotEmpty()
  @IsString()
  type: OpenDocumentType;

  @ApiProperty({
    description: `link`,
    example: 'Document link',
  })
  @IsNotEmpty()
  @IsString()
  link: string;

  @ApiProperty({
    description: `code`,
    example: 'Document code',
  })
  @IsNotEmpty()
  @IsString()
  code: string;

  @ApiProperty({
    description: `titleUz`,
    example: "",
  })
  @IsNotEmpty()
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

export default CreateOpenDocumentDto;