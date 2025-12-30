import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello my test project!';
  }

  getMyName(): string {
    return 'Andrii2';
  }

  getMySecondName(): string {
    return 'Bernatskyi2';
  }

  getMyCity(): string {
    return 'Lviv';
  }
}
