import { Module } from '@nestjs/common';
import { PessoaModule } from './pessoa.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [PessoaModule],
  controllers: [],
  providers: [],
})



@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '172.18.0.2',
      port: 3306,
      username: 'root',
      password: '12345',
      database: 'test',
      entities: [],
      synchronize: true,
    }),
  ],
})

export class AppModule {}
