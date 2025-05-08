import { ApiProperty } from '@nestjs/swagger';
import { v4 as uuidv4 } from 'uuid';

export class Pessoa {
  @ApiProperty({ description: 'Nome da pessoa', example: 'João Silva' })
  public nome: string;

  @ApiProperty({
    description: 'UUID da pessoa',
    example: 'd290f1ee-6c54-4b01-90e6-d701748f0851',
  })
  public id: string;

  constructor(nome: string, id?: string) {
    this.nome = nome;
    this.id = id ?? uuidv4();
  }
}
