import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ManagementEnum } from '../../../infra/shared/enum';
import { ManagementType } from 'src/infra/shared/type';
class CreateManagementDto {
  @ApiProperty({
    description: `type`,
    example: ManagementEnum.MANAGEMENT,
  })
  @IsNotEmpty()
  @IsString()
  type: ManagementType;

  @ApiProperty({
    description: `url`,
    example: 'url',
  })
  @IsOptional()
  @IsString()
  url: string;


  @ApiProperty({
    description: `phone`,
    example: '+998 99-999-88-77',
  })
  @IsNotEmpty()
  @IsString()
  phone: string;

  @ApiProperty({
    description: `gmail`,
    example: 'some@thing.com',
  })
  @IsNotEmpty()
  @IsString()
  gmail: string;

  @ApiProperty({
    description: `telegram`,
    example: 'telegram',
  })
  @IsNotEmpty()
  @IsString()
  telegram: string;

  @ApiProperty({
    description: `twitter`,
    example: 'twitter',
  })
  @IsNotEmpty()
  @IsString()
  twitter: string;

  @ApiProperty({
    description: `linkedin`,
    example: 'linkedin',
  })
  @IsNotEmpty()
  @IsString()
  linkedin: string;

  @ApiProperty({
    description: `facebook`,
    example: 'facebook',
  })
  @IsNotEmpty()
  @IsString()
  facebook: string;

  @ApiProperty({
    description: `instagram`,
    example: 'instagram',
  })
  @IsNotEmpty()
  @IsString()
  instagram: string;

  @ApiProperty({
    description: `firstNameUz`,
    example: "...",
  })
  @IsNotEmpty()
  @IsString()
  readonly firstNameUz: string;

  @ApiProperty({
    description: `firstNameRu`,
    example: "...",
  })
  @IsOptional()
  @IsString()
  readonly firstNameRu: string;

  @ApiProperty({
    description: `firstNameEn`,
    example: "...",
  })
  @IsOptional()
  @IsString()
  readonly firstNameEn: string;

  @ApiProperty({
    description: `lastNameUz`,
    example: "...",
  })
  @IsNotEmpty()
  @IsString()
  readonly lastNameUz: string;

  @ApiProperty({
    description: `lastNameRu`,
    example: "...",
  })
  @IsOptional()
  @IsString()
  readonly lastNameRu: string;

  @ApiProperty({
    description: `lastNameEn`,
    example: "...",
  })
  @IsOptional()
  @IsString()
  readonly lastNameEn: string;

  @ApiProperty({
    description: `fatherNameUz`,
    example: "...",
  })
  @IsNotEmpty()
  @IsString()
  readonly fatherNameUz: string;

  @ApiProperty({
    description: `fatherNameRu`,
    example: "...",
  })
  @IsOptional()
  @IsString()
  readonly fatherNameRu: string;

  @ApiProperty({
    description: `fatherNameEn`,
    example: "...",
  })
  @IsOptional()
  @IsString()
  readonly fatherNameEn: string;

  @ApiProperty({
    description: `positionUz`,
    example: '...',
  })
  @IsNotEmpty()
  @IsString()
  readonly positionUz: string;

  @ApiProperty({
    description: `positionRu`,
    example: '...',
  })
  @IsOptional()
  @IsString()
  readonly positionRu: string;

  @ApiProperty({
    description: `positionEn`,
    example: '...',
  })
  @IsOptional()
  @IsString()
  readonly positionEn: string;

  @ApiProperty({
    description: `taskUz`,
    example: "...",
  })
  @IsNotEmpty()
  @IsString()
  readonly taskUz: string;

  @ApiProperty({
    description: `taskRu`,
    example: "...",
  })
  @IsOptional()
  @IsString()
  readonly taskRu: string;

  @ApiProperty({
    description: `taskEn`,
    example: "...",
  })
  @IsOptional()
  @IsString()
  readonly taskEn: string;
}

export default CreateManagementDto;
