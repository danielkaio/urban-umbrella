import { Module } from "@nestjs/common";
import { PessoaController } from "./Controller/PessoaController";
import { PessoaRepository } from "./Reposytory/PessoaRepository";

@Module({
    controllers:[PessoaController],
    providers:[PessoaRepository]

})

export class PessoaModule{}