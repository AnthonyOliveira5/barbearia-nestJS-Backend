import { Type } from 'class-transformer';
import { IsDate, IsNotEmpty, IsNumber, IsStrongPassword, Matches } from 'class-validator';
import { IsCPF } from 'class-validator-cpf';

export class CreateClienteDto {
  @IsNotEmpty({ message: 'Nome é obrigatório' })
  nomeCliente: string;
  
  @IsNotEmpty({message: "Email é obrigatório"})
  emailCliente: string;

  @IsNotEmpty({ message: 'Data de nascimento é obrigatória' })
  @Type(() => Date)
  @IsDate({ message: 'Data de nascimento deve ser uma data válida' })
  dataNascimentoCliente: Date;

  @IsCPF({message: 'precisa ser um CPF válido'})
  CPFcliente: string;

  @IsNotEmpty({ message: 'Senha é obrigatória' })
  @IsStrongPassword(
    { minLength: 8, minNumbers: 1, minLowercase: 1, minSymbols: 1 },
    { message: 'Senha fraca' },
  )
  senhaCliente: string;

  @IsNotEmpty({message: 'Endereço é obrigatório'})
  enderecoCliente: string;
}
