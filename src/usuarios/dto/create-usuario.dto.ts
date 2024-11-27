import { IsEmail, IsNotEmpty, IsStrongPassword, IsDateString, IsPhoneNumber, IsNumberString, Length } from 'class-validator';

export class CreateUsuarioDto {
  @IsNotEmpty({ message: 'Nome é obrigatório' })
  nome: string;

  @IsEmail({}, { message: 'E-mail inválido' })
  email: string;

  @IsNotEmpty({ message: 'CPF é obrigatório' })
  @Length(11, 11, { message: 'CPF deve ter 11 dígitos' })
  @IsNumberString({}, { message: 'CPF deve conter apenas números' })
  CPF: string;
  
  @IsDateString({}, { message: 'Data de nascimento inválida' })
  dataNascimento: Date;
  
  @IsNotEmpty({ message: 'Endereço é obrigatório' })
  endereco: string;
  
  @IsPhoneNumber('BR', { message: 'Telefone inválido' })
  telefone: string;
  
  @IsNumberString({}, { message: 'Salário inválido' })
  salario: number;
  
  @IsNotEmpty({ message: 'Senha é obrigatória' })
  @IsStrongPassword(
    { minLength: 8, minNumbers: 1, minLowercase: 1, minSymbols: 1 },
    { message: 'Senha fraca' },
  )
  senha: string;
}
