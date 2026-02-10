import { Injectable } from '@nestjs/common';
import dayjs from 'dayjs';
@Injectable()
export class AppService {
  getData(): { message: string } {
    const hour = dayjs().hour();
    const greeting = hour >= 6 && hour < 18 ? 'Good day' : 'Good night';
    return { message: `${greeting}~ it's ${dayjs().format('HH:mm:ss')}` };
  }
}
