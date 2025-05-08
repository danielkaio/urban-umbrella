import { Module } from '@nestjs/common';
import { PessoaModule } from './pessoa.module';
import { TypeOrmModule } from '@nestjs/typeorm';

// @Module({
//   imports: [
//     TypeOrmModule.forRoot({
//       type: 'mysql',
//       host: '172.17.0.2',
//       port: 3306,
//       username: 'root',
//       password: '12345',
//       database: 'cinema',
//       entities: [],
//       synchronize: true,
//     }),
//   ],
// })
@Module({
  imports: [PessoaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
