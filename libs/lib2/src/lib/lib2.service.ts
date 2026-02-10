import {Injectable} from "@nestjs/common";

@Injectable()
export class Lib2Service {
  reverse(str: string): string {
    return str.split('').reverse().join('');
  }
}
