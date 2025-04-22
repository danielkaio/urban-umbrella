import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from "@nestjs/common";
import { PessoaRepository } from "src/Reposytory/PessoaRepository";
import {Pessoa} from 'src/interface.pessoa'



@Controller("/pessoas")
export class PessoaController {

    constructor(private pessoaReposytory: PessoaRepository) { }

  
    @Get()
    async listar(): Promise<Pessoa[]> {
      return this.pessoaReposytory.lista();
    }
  

    @Post()
    async criar(@Body() usuario) {
     await   this.pessoaReposytory.salvar(usuario)
    }


    @Patch(':id')
    async atualizar(
      @Param('id') id: string,
      @Body() dadosAtualizados: Partial<Pessoa>,
    ): Promise<Pessoa> {
      return this.pessoaReposytory.atualizar(id as Pessoa['id'], dadosAtualizados);

}


}

