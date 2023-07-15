import { Controller, Get } from '@nestjs/common';
import { BMsService } from './b-ms.service';

@Controller()
export class BMsController {
  constructor(private readonly bMsService: BMsService) {}

  @Get()
  getHello(): string {
    return this.bMsService.getHello();
  }
}
