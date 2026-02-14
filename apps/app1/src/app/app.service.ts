import { Injectable } from '@nestjs/common';
import dayjs from 'dayjs';
@Injectable()
export class AppService {
  getData(): { message: string } {
    const hour = dayjs().hour();
    const emoji = hour >= 6 && hour < 18 ? '☀️' : '🌙';
    return { message: `${emoji} Hello API - ${dayjs().format('YYYY-MM-DD HH:mm:ss')}` };
  }
}
