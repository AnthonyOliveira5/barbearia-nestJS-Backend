import { Type } from 'class-transformer';
import { IsBoolean, IsDate, IsNotEmpty, IsNumber, Matches } from 'class-validator';

export class CreateClienteDto {
  @IsNotEmpty({ message: 'Nome é obrigatório' })
  nomeCliente: string;
  
  @IsNotEmpty({message: "Email é obrigatório"})
  emailCliente: string;

  @IsNotEmpty({ message: 'Data de nascimento é obrigatória' })
  @Type(() => Date)
  @IsDate({ message: 'Data de nascimento deve ser uma data válida' })
  dataNascimentoCliente: Date;

}
