import { Module } from '@nestjs/common';
import { BMsController } from './b-ms.controller';
import { BMsService } from './b-ms.service';
import { ClientsModule, Transport } from "@nestjs/microservices";

@Module({
  imports: [
    ClientsModule.register([
      {
        name: "b",
        transport: Transport.RMQ,
        options: {
          urls: [`amqp://localhost:5672`],
          queue: "b",
          queueOptions: {
            durable: false
          }
        }
      }
    ])
  ],
  controllers: [BMsController],
  providers: [BMsService],
})
export class BMsModule {}
