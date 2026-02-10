import { Injectable } from '@nestjs/common';
import dayjs from 'dayjs';
@Injectable()
export class AppService {
  getData(): { message: string } {
    return { message: `Hello~ it's ${dayjs().format('HH:mm:ss')}` };
  }
}
