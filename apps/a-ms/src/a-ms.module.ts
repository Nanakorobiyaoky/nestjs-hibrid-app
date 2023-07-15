import { Module } from '@nestjs/common';
import { AMsController } from './a-ms.controller';
import { AMsService } from './a-ms.service';

@Module({
  imports: [],
  controllers: [AMsController],
  providers: [AMsService],
})
export class AMsModule {}
