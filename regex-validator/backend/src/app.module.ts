import { Compare_regexModule } from './compare/compare_regex.module';
import { Compare_regexController } from './compare/compare_regex.controller';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Compare_regexService } from './compare/compare_regex.service';

@Module({
  imports: [Compare_regexModule],
  controllers: [Compare_regexController, AppController],
  providers: [AppService, Compare_regexService],
})
export class AppModule {}
