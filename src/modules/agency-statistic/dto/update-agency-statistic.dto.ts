import { IsNumber, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
class UpdateAgencyStatisticDto {
  @ApiProperty({
    description: `uderReview`,
    example: 123,
  })
  @IsOptional()
  @IsNumber()
  readonly uderReview: number;

  @ApiProperty({
    description: `rejected`,
    example: 31,
  })
  @IsOptional()
  @IsNumber()
  readonly rejected: number;

  @ApiProperty({
    description: `solved`,
    example: 342,
  })
  @IsOptional()
  @IsNumber()
  readonly solved: number;

  @ApiProperty({
    description: `detachedLandArea`,
    example: 1223,
  })
  @IsOptional()
  @IsNumber()
  readonly detachedLandArea: number;

  @ApiProperty({
    description: `allocatedSubsidies`,
    example: 1312,
  })
  @IsOptional()
  @IsNumber()
  readonly allocatedSubsidies: number;

  @ApiProperty({
    description: `greenhouseSubsidies`,
    example: 321,
  })
  @IsOptional()
  @IsNumber()
  readonly greenhouseSubsidies: number;
}
export default UpdateAgencyStatisticDto;
