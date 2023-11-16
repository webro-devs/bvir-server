import { IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { OpenDocumentType } from 'src/infra/shared/type';
import {  OpenDocumentTypeEnum } from 'src/infra/shared/enum';
class UpdateDocumentDto {
  @ApiProperty({
    description: `type`,
    example: OpenDocumentTypeEnum.PF,
  })
  @IsOptional()
  @IsString()
  type: OpenDocumentType;

  @ApiProperty({
    description: `link`,
    example: 'Document link',
  })
  @IsOptional()
  @IsString()
  link: string;

  @ApiProperty({
    description: `code`,
    example: 'Document code',
  })
  @IsOptional()
  @IsString()
  code: string;

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
export default UpdateDocumentDto;
