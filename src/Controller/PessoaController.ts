import { Body, Controller, Delete, Get, Param, Patch, Post, Put } from "@nestjs/common";
import { ApiCreatedResponse, ApiHeader, ApiOperation, ApiResponse } from "@nestjs/swagger";
import { PessoaRepository } from "src/Reposytory/PessoaRepository";
import {Pessoa} from 'src/pessoa'



@Controller("/pessoas")
export class PessoaController {

    constructor(private pessoaReposytory: PessoaRepository) { }

    @ApiOperation({ summary: "list people" })
    @Get()
    async listar(): Promise<Pessoa[]> {
      return this.pessoaReposytory.lista();
    }
  

    @ApiOperation({ summary: "Create some resource" })

    
    @Post()
    @ApiCreatedResponse({
      description: 'The record has been successfully created.',
      type: Pessoa,
    })
   
    async criar(@Body() usuario) {
     await   this.pessoaReposytory.salvar(usuario)
    }

    @ApiOperation({ summary: "edit people" })
    @Patch(':id')
    async atualizar(
      @Param('id') id: string,
      @Body() dadosAtualizados: Partial<Pessoa>,
    ): Promise<Pessoa> {
      return this.pessoaReposytory.atualizar(id as Pessoa['id'], dadosAtualizados);

}


}

