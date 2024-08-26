import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { Compare_regexService } from './compare_regex.service';
import { Regex_Dto } from './regex.dto';

@ApiTags('Compare_Regex')
@Controller('Compare_Regex')
@Controller()
export class Compare_regexController {
  constructor(private readonly comreg_ser: Compare_regexService) {}

  @Post('validate')
  @ApiResponse({ description: 'get previous regex' })
  compare_regex(@Body() Regex_Dto: Regex_Dto) {
    return this.comreg_ser.validate_Reg(Regex_Dto);
  }
}
