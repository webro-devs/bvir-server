import { IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ManagementEnum } from '../../../infra/shared/enum';
import { ManagementType } from 'src/infra/shared/type';
class UpdateManagementDto {
  @ApiProperty({
    description: `type`,
    example: ManagementEnum.MANAGEMENT,
  })
  @IsOptional()
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
  @IsOptional()
  @IsString()
  phone: string;

  @ApiProperty({
    description: `gmail`,
    example: 'some@thing.com',
  })
  @IsOptional()
  @IsString()
  gmail: string;

  @ApiProperty({
    description: `telegram`,
    example: 'telegram',
  })
  @IsOptional()
  @IsString()
  telegram: string;

  @ApiProperty({
    description: `twitter`,
    example: 'twitter',
  })
  @IsOptional()
  @IsString()
  twitter: string;

  @ApiProperty({
    description: `linkedin`,
    example: 'linkedin',
  })
  @IsOptional()
  @IsString()
  linkedin: string;

  @ApiProperty({
    description: `facebook`,
    example: 'facebook',
  })
  @IsOptional()
  @IsString()
  facebook: string;

  @ApiProperty({
    description: `instagram`,
    example: 'instagram',
  })
  @IsOptional()
  @IsString()
  instagram: string;

  @ApiProperty({
    description: `firstNameUz`,
    example: "...",
  })
  @IsOptional()
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
  @IsOptional()
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
  @IsOptional()
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
  @IsOptional()
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
  })ManagementType
  @IsOptional()
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
export default UpdateManagementDto;
