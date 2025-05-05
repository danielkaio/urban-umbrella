
import { ApiProperty } from "@nestjs/swagger";

import { UUID } from "crypto";


export class Pessoa {

  @ApiProperty({
    type:String
  })
  nome: string;
  id : UUID
  
}