import { Module } from "@nestjs/common";
import { AMsController } from "./a-ms.controller";
import { AMsService } from "./a-ms.service";
import { ClientsModule, Transport } from "@nestjs/microservices";

@Module({
  imports: [
    ClientsModule.register([
      {
        name: "a",
        transport: Transport.RMQ,
        options: {
          urls: [`amqp://localhost:5672`],
          queue: "a",
          queueOptions: {
            durable: false
          }
        }
      }
    ])
  ],
  controllers: [AMsController],
  providers: [AMsService]
})
export class AMsModule {
}
