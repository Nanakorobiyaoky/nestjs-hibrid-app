import { Injectable } from '@nestjs/common';

@Injectable()
export class BMsService {
  getHello(): string {
    return 'Hello World!';
  }
}
