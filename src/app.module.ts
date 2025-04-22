import { Module } from '@nestjs/common';
import { PessoaModule } from './pessoa.module';


@Module({
  imports: [PessoaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
