import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Clinica } from './clinica.ts/Clinica.entity.js';

@Module ({
  imports: [
    TypeOrmModule.forRoot({
      type:'mysql',
      host:'localhost',
      port:3306,
      username:'root',
      password:'12345678',
      database:'escola_api3',
      entities: [Clinica]
    

    }),
  ],
})
export class AppModule {}



