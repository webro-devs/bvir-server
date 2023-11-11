import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
class CreateManagementApparatusTypeDto {
  @ApiProperty({
    description: `typeUz`,
    example: "",
  })
  @IsNotEmpty()
  @IsString()
  readonly typeUz: string;

  @ApiProperty({
    description: `typeRu`,
    example: "",
  })
  @IsOptional()
  @IsString()
  readonly typeRu: string;

  @ApiProperty({
    description: `typeEn`,
    example: "",
  })
  @IsOptional()
  @IsString()
  readonly typeEn: string;

  @ApiProperty({
    description: `index`,
    example: "",
  })
  @IsOptional()
  @IsNumber()
  readonly index: number;
}

export default CreateManagementApparatusTypeDto;
