import { IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
class UpdateManagementApparatusTypeDto {
  @ApiProperty({
    description: `typeUz`,
    example: "",
  })
  @IsOptional()
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
}
export default UpdateManagementApparatusTypeDto;
