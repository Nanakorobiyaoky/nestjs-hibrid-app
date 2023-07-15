import { Injectable } from "@nestjs/common";
import { RpcException } from "@nestjs/microservices";

@Injectable()
export class AMsService {
  getHelloA(): string {
    console.log('Hello a-ms!');
    return 'Hello a-ms!';
  }


  getErrorA() {
    return new RpcException('Error a');
  }
}
