import { IsString, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
class QueryDefaultPageDto {
  @ApiProperty({
    description: `side`,
    example: 'right',
  })
  @IsOptional()
  @IsString()
  side: string;

  @ApiProperty({
    description: `type`,
    example: 'page name',
  })
  @IsOptional()
  @IsString()
  readonly type: string;
}

export default QueryDefaultPageDto;
