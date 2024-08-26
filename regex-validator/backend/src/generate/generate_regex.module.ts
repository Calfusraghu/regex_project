import { Generate_regexService } from './generate_regex.service';
import { Generate_regexController } from './generate_regex.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [Generate_regexController],
  providers: [Generate_regexService],
})
export class Generate_regexModule {}
