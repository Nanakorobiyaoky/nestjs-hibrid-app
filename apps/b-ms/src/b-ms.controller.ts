import { Controller, Get, Inject } from "@nestjs/common";
import { BMsService } from './b-ms.service';
import { ClientProxy, MessagePattern, RpcException } from "@nestjs/microservices";
import { Observable } from "rxjs";

@Controller()
export class BMsController {
  constructor(private readonly bMsService: BMsService,
              @Inject('b') private readonly clientB: ClientProxy) {}

  @Get('b-hello')
  getHello(): Observable<string> {
    const pattern = { cmd: 'hello from b-ms' };
    return this.clientB.send<string>(pattern, {});
  }

  @Get('b-error')
  getError() {
    const pattern = { cmd: 'error from b-ms' };
    return this.clientB.send(pattern, {});
  }

  @MessagePattern({cmd: 'hello from b-ms'})
  getHelloB(): string {
    return this.bMsService.getHelloB();
  }

  @MessagePattern({cmd: 'error from b-ms'})
  getErrorB(): RpcException {
    return this.bMsService.getErrorB();
  }
}
