import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello my test project!';
  }

  getMyName(): string {
    return 'Andrii';
  }

  getMySecondName(): string {
    return 'Bernatskyi';
  }
}
