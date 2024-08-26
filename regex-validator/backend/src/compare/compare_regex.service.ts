/*
https://docs.nestjs.com/providers#services
*/

import { Injectable } from '@nestjs/common';
import { Regex_Dto } from './regex.dto';

@Injectable()
export class Compare_regexService {
  validate_Reg(regdto: Regex_Dto) {
    const { pattern, testString } = regdto;

    try {
      const regexscipt = new RegExp(pattern);
      console.log('pattern is ');
      console.log(` lets check pattern ${regexscipt}`);
      const isValid = regexscipt.test(testString); // String on which we perform the search for given pattern.
      console.log('regex is ');
      console.log(` lets check pattern ${testString}`);
      return {
        isValid: isValid,
        message: isValid ? ` Match found ` : ` No match found`,
      };
    } catch {
      return {
        isValid: false,
        message: `Invalid pattern`,
      };
    }
  }
}
