import { IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
class UpdateInteractiveServiceDto {
  @ApiProperty({
    description: `title`,
    example: 'Online kredit',
  })
  @IsOptional()
  @IsString()
  readonly title: string;

  @ApiProperty({
    description: `description`,
    example: `Agentlikning markaziy apparat hodimlar ma'lumotlari bilan tanishish sahifasi`
  })
  @IsOptional()
  @IsString()
  readonly description: string;

  @ApiProperty({
    description: `url`,
    example: 'https://avatar.png',
  })
  @IsOptional()
  @IsString()
  readonly url: string;
}
export default UpdateInteractiveServiceDto;
