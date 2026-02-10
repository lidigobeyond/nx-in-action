import {Injectable} from "@nestjs/common";

@Injectable()
export class Lib1Service {
  ping(): string {
    return 'pong';
  }
}
