import { Injectable } from '@nestjs/common';
import { Pessoa } from 'src/pessoa';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class PessoaRepository {
  private pessoas: Pessoa[] = [];

  async salvar(usuario: Pessoa): Promise<void> {
    const pessoaComId: Pessoa = {
      ...usuario,
      id: uuidv4() as unknown as Pessoa['id'],
    };
    this.pessoas.push(pessoaComId);
  }

  async lista(): Promise<Pessoa[]> {
    return this.pessoas;
  }

  async atualizar(
    id: Pessoa['id'],
    dadosAtualizados: Partial<Pessoa>,
  ): Promise<Pessoa> {
    const PessoaId = this.pessoas.findIndex((pessoa) => pessoa.id === id);

    const pessoaAtualizada = {
      ...this.pessoas[PessoaId],
      ...dadosAtualizados,
      id: this.pessoas[PessoaId].id,
    };

    this.pessoas[PessoaId] = pessoaAtualizada;

    return pessoaAtualizada;
  }
}
