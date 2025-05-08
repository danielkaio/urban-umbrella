import {
  Body,
  Controller,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOperation } from '@nestjs/swagger';
import { PessoaRepository } from 'src/Repository/PessoaRepository';
import { Pessoa } from 'src/pessoa';

@Controller('/pessoas')
export class PessoaController {
  constructor(private pessoaReposytory: PessoaRepository) {}

  @ApiOperation({ summary: 'list people' })
  @Get()
  async listar(): Promise<Pessoa[]> {
    return this.pessoaReposytory.lista();
  }

  @ApiOperation({ summary: 'Create some resource' })
  @Post()
  @ApiCreatedResponse({
    description: 'The record has been successfully created.',
    type: Pessoa,
  })
  async criar(@Body() usuario) {
    await this.pessoaReposytory.salvar(usuario);
    return { statusCode: HttpStatus.CREATED, message: 'Tudo certo!' };
  }

  @ApiOperation({ summary: 'edit people' })
  @Patch(':id')
  async atualizar(
    @Param('id') id: string,
    @Body() dadosAtualizados: Partial<Pessoa>,
  ): Promise<Pessoa> {
    return this.pessoaReposytory.atualizar(id, dadosAtualizados);
  }
}
