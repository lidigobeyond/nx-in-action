import {Injectable} from "@nestjs/common";

@Injectable()
export class Lib3Service {
  random(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
