import { Controller, Get, Inject } from "@nestjs/common";
import { AMsService } from './a-ms.service';
import { ClientProxy, MessagePattern, RpcException } from "@nestjs/microservices";
import { Observable } from "rxjs";

@Controller()
export class AMsController {
  constructor(private readonly aMsService: AMsService,
              @Inject('a') private readonly clientA: ClientProxy) {}

  @Get('a-hello')
  execute(): Observable<string> {
    const pattern = {cmd: 'hello from a-ms'};
    return this.clientA.send<string>(pattern, {});
  }

  @Get('a-error')
  getError() {
    const pattern = { cmd: 'error from a-ms' };
    return this.clientA.send(pattern, {});
  }

  @MessagePattern({cmd: 'hello from a-ms'})
  getHelloA(): string {
    return this.aMsService.getHelloA();
  }

  @MessagePattern({cmd: 'error from a-ms'})
  getErrorB(): RpcException {
    return this.aMsService.getErrorA();
  }
}
