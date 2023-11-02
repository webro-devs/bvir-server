import { IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
class CreateAgencyStatisticDto {
  @ApiProperty({
    description: `uderReview`,
    example: 123,
  })
  @IsNotEmpty()
  @IsNumber()
  readonly uderReview: number;

  @ApiProperty({
    description: `rejected`,
    example: 31,
  })
  @IsNotEmpty()
  @IsNumber()
  readonly rejected: number;

  @ApiProperty({
    description: `solved`,
    example: 342,
  })
  @IsNotEmpty()
  @IsNumber()
  readonly solved: number;

  @ApiProperty({
    description: `detachedLandArea`,
    example: 1223,
  })
  @IsNotEmpty()
  @IsNumber()
  readonly detachedLandArea: number;

  @ApiProperty({
    description: `allocatedSubsidies`,
    example: 1312,
  })
  @IsNotEmpty()
  @IsNumber()
  readonly allocatedSubsidies: number;

  @ApiProperty({
    description: `greenhouseSubsidies`,
    example: 321,
  })
  @IsNotEmpty()
  @IsNumber()
  readonly greenhouseSubsidies: number;
}

export default CreateAgencyStatisticDto;
