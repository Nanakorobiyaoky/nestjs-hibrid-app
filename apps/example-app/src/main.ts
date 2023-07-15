import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from "@nestjs/config";
import { MicroserviceOptions, Transport } from "@nestjs/microservices";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService)
  const PORT = configService.get<string>('APP_PORT')

  const microserviceA = app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: [`amqp://localhost:5672`],
      queue: 'a',
      queueOptions: { durable: false },
    },
  });

  const microserviceB = app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: [`amqp://localhost:5672`],
      queue: 'b',
      queueOptions: { durable: false },
    },
  });

  await app.startAllMicroservices().then(() => console.log('Microservices started'));
  await app.listen(PORT, async () => console.log(`Application started on ${await app.getUrl()}`));
  // console.log(app.getMicroservices())
}
bootstrap();
