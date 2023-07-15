import { NestFactory } from '@nestjs/core';
import { BMsModule } from './b-ms.module';

async function bootstrap() {
  const app = await NestFactory.create(BMsModule);
  await app.listen(3000);
}
bootstrap();
