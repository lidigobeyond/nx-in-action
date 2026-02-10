import { Injectable } from '@nestjs/common';

const fortunes = [
  '오늘은 커피 한 잔의 여유가 필요한 날 ☕',
  '버그 없는 하루가 될 거예요 🐛✨',
  '오늘의 배포는 성공적일 겁니다 🚀',
  'git push --force 는 참아주세요 🙏',
  '점심 메뉴는 치킨 어떠세요? 🍗',
];

@Injectable()
export class AppService {
  getData(): { message: string } {
    const fortune = fortunes[Math.floor(Math.random() * fortunes.length)];
    return { message: fortune };
  }
}
