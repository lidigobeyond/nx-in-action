import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import {Lib2Module} from "@nx-nestjs-workspace/lib2";

@Module({
  imports: [Lib2Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
