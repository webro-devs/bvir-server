import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { DocumentType } from 'src/infra/shared/type';
import { DocumentTypeEnum } from 'src/infra/shared/enum';
class CreateDocumentDto {
  @ApiProperty({
    description: `type`,
    example: DocumentTypeEnum.REGULATORY,
  })
  @IsNotEmpty()
  @IsString()
  type: DocumentType;

  @ApiProperty({
    description: `link`,
    example: 'Document link',
  })
  @IsNotEmpty()
  @IsString()
  link: string;

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

export default CreateDocumentDto;
