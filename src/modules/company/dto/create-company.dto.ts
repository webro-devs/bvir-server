import { IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
class CreateCompanyDto {
  @ApiProperty({
    description: `url`,
    example: 'http//:....',
  })
  @IsNotEmpty()
  @IsString()
  readonly url: string;

  @ApiProperty({
    description: `description`,
    example: 'Description',
  })
  @IsNotEmpty()
  @IsString()
  readonly description: string;
}

export default CreateCompanyDto;
