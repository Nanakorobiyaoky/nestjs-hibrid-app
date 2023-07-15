import { Controller, Get } from '@nestjs/common';
import { AMsService } from './a-ms.service';

@Controller()
export class AMsController {
  constructor(private readonly aMsService: AMsService) {}

  @Get()
  getHello(): string {
    return this.aMsService.getHello();
  }
}
