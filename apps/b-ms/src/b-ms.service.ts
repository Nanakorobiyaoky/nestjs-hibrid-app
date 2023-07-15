import { Injectable } from "@nestjs/common";
import { RpcException, ClientProxy } from "@nestjs/microservices";

@Injectable()
export class BMsService {
  getHelloB(): string {
    console.log("Hello b-ms!");
    return "Hello b-ms!";
  }

  getErrorB() {
    return new RpcException("Error b");
  }
}
