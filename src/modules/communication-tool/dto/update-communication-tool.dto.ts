import { IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
class UpdateCommunicationToolDto {
  @ApiProperty({
    description: `mapLink`,
    example: 'link',
  })
  @IsOptional()
  @IsString()
  readonly mapLink: string;

  @ApiProperty({
    description: `phone`,
    example: '+998 71 244 4625',
  })
  @IsOptional()
  @IsString()
  readonly phone: string;

  @ApiProperty({
    description: `email`,
    example: 'garden@agro.uz,',
  })
  @IsOptional()
  @IsString()
  readonly email: string;

  @ApiProperty({
    description: `callCenter`,
    example: '(55) 500-80-08 1342',
  })
  @IsOptional()
  @IsString()
  readonly callCenter: string;


  @ApiProperty({
    description: `addressUz`,
    example: "",
  })
  @IsOptional()
  @IsString()
  readonly addressUz: string;

  @ApiProperty({
    description: `addressRu`,
    example: "",
  })
  @IsOptional()
  @IsString()
  readonly addressRu: string;

  @ApiProperty({
    description: `addressEn`,
    example: "",
  })
  @IsOptional()
  @IsString()
  readonly addressEn: string;

  @ApiProperty({
    description: `workOrderUz`,
    example: "",
  })
  @IsOptional()
  @IsString()
  readonly workOrderUz: string;

  @ApiProperty({
    description: `workOrderRu`,
    example: "",
  })
  @IsOptional()
  @IsString()
  readonly workOrderRu: string;

  @ApiProperty({
    description: `workOrderEn`,
    example: "",
  })
  @IsOptional()
  @IsString()
  readonly workOrderEn: string;
}
export default UpdateCommunicationToolDto;
