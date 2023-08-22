import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ManagementEnum } from '../../../infra/shared/enum';
class CreateManagementDto {
  @ApiProperty({
    description: `name`,
    example: 'John Doe',
  })
  @IsNotEmpty()
  @IsString()
  readonly name: string;

  @ApiProperty({
    description: `type`,
    example: ManagementEnum.MINISTRY,
  })
  @IsNotEmpty()
  @IsString()
  type: ManagementEnum;

  @ApiProperty({
    description: `avatar`,
    example: 'url',
  })
  @IsNotEmpty()
  @IsString()
  avatar: string;

  @ApiProperty({
    description: `date`,
    example: '2023-10-23',
  })
  @IsOptional()
  @IsString()
  date: string;

  @ApiProperty({
    description: `position`,
    example: 'director',
  })
  @IsNotEmpty()
  @IsString()
  position: string;

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
}

export default CreateManagementDto;
