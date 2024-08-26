import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';

export class Regex_Dto {
  @ApiProperty({ description: 'This is pattern we need to validate ' })
  @IsString()
  pattern: string;

  @ApiProperty({
    description: 'This is string which we we validate against string pattern',
  })
  @IsString()
  testString: string;
}
