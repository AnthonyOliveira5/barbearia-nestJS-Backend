import { IsEmail, IsNotEmpty, IsStrongPassword } from 'class-validator';

export class CreateUsuarioDto {
  @IsNotEmpty({ message: 'Nome é obrigatório' })
  nome: string;

  @IsEmail({}, { message: 'E-mail inválido' })
  email: string;

  @IsNotEmpty({ message: 'Senha é obrigatória' })
  @IsStrongPassword(
    { minLength: 8, minNumbers: 1, minLowercase: 1, minSymbols: 1 },
    { message: 'Senha fraca' },
  )
  senha: string;

}
