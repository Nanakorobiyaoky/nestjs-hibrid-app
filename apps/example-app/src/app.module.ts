import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import * as process from "process";
import { AMsModule } from "../../a-ms/src/a-ms.module";
import { BMsModule } from "../../b-ms/src/b-ms.module";

@Module({
  imports: [
    AMsModule,
    BMsModule,
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`
    })
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
