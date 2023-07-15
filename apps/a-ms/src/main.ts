import { NestFactory } from '@nestjs/core';
import { AMsModule } from './a-ms.module';

async function bootstrap() {
  const app = await NestFactory.create(AMsModule);
  await app.listen(3000);
}
bootstrap();
