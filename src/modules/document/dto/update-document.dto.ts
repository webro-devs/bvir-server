import { IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { DocumentType } from 'src/infra/shared/type';
import { DocumentTypeEnum } from 'src/infra/shared/enum';
class UpdateDocumentDto {
  @ApiProperty({
    description: `type`,
    example: DocumentTypeEnum.DOCUMENT_2,
  })
  @IsOptional()
  @IsString()
  type: DocumentType;

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
