import { Injectable } from '@nestjs/common';

@Injectable()
export class AMsService {
  getHello(): string {
    return 'Hello World!';
  }
}
