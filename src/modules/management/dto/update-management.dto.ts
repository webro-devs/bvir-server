import { IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { ManagementEnum } from '../../../infra/shared/enum';
class UpdateManagementDto {
  @ApiProperty({
    description: `name`,
    example: 'John Doe',
  })
  @IsOptional()
  @IsString()
  readonly name: string;

  @ApiProperty({
    description: `type`,
    example: ManagementEnum.MINISTRY,
  })
  @IsOptional()
  @IsString()
  type: ManagementEnum;

  @ApiProperty({
    description: `avatar`,
    example: 'url',
  })
  @IsOptional()
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
  @IsOptional()
  @IsString()
  position: string;

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
}
export default UpdateManagementDto;
