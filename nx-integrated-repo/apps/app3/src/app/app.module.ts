import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import {Lib1Module} from "@nx-nestjs-workspace/lib1";
import {Lib2Module} from "@nx-nestjs-workspace/lib2";
import {Lib3Module} from "@nx-nestjs-workspace/lib3";

@Module({
  imports: [Lib1Module, Lib2Module, Lib3Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
