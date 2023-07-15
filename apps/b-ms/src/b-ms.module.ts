import { Module } from '@nestjs/common';
import { BMsController } from './b-ms.controller';
import { BMsService } from './b-ms.service';

@Module({
  imports: [],
  controllers: [BMsController],
  providers: [BMsService],
})
export class BMsModule {}
