import { IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
class UpdateCompanyDto {
  @ApiProperty({
    description: `url`,
    example: 'http//:....',
  })
  @IsOptional()
  @IsString()
  readonly url: string;

  @ApiProperty({
    description: `description`,
    example: 'Description',
  })
  @IsOptional()
  @IsString()
  readonly description: string;
}
export default UpdateCompanyDto;
