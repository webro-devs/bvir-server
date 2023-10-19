import { IsNotEmpty,IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
class CreateInteractiveServiceDto {
  @ApiProperty({
    description: `title`,
    example: 'Online kredit',
  })
  @IsNotEmpty()
  @IsString()
  readonly title: string;

  @ApiProperty({
    description: `description`,
    example: `Agentlikning markaziy apparat hodimlar ma'lumotlari bilan tanishish sahifasi`
  })
  @IsNotEmpty()
  @IsString()
  readonly description: string;

  @ApiProperty({
    description: `url`,
    example: 'https://avatar.png',
  })
  @IsNotEmpty()
  @IsString()
  readonly url: string;
}

export default CreateInteractiveServiceDto;
