import { IsNotEmpty, IsString, IsOptional, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { UserRoleType } from '../../../infra/shared/type'
class CreateUserDto {
  @ApiProperty({
    description: `role`,
    example: 1,
  })
  @IsNotEmpty()
  @IsNumber()
  readonly role: UserRoleType;

}

export default CreateUserDto;
