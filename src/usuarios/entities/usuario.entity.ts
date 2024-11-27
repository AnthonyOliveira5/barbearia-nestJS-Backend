import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { IsEmail, IsNotEmpty, IsStrongPassword, IsDateString, IsPhoneNumber, IsNumberString, Length } from 'class-validator';
import { Agendamento } from "src/agendamento/entities/agendamento.entity";

@Entity()
export class Usuario {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty({ message: 'Nome é obrigatório' })
  nome: string;

  @Column({ unique: true })
  @IsEmail({}, { message: 'E-mail inválido' })
  email: string;

  @Column()
  @IsNotEmpty({ message: 'Senha é obrigatória' })
  @IsStrongPassword(
    { minLength: 8, minNumbers: 1, minLowercase: 1, minSymbols: 1 },
    { message: 'Senha fraca' },
  )
  senha: string;

  @Column({ unique: true })
  @IsNotEmpty({ message: 'CPF é obrigatório' })
  @Length(11, 11, { message: 'CPF deve ter 11 dígitos' })
  @IsNumberString({}, { message: 'CPF deve conter apenas números' })
  CPF: string;

  @Column({ type: 'date' })
  @IsDateString({}, { message: 'Data de nascimento inválida' })
  dataNascimento: Date;

  @Column()
  @IsNotEmpty({ message: 'Endereço é obrigatório' })
  endereco: string;

  @Column()
  @IsPhoneNumber('BR', { message: 'Telefone inválido' })
  telefone: string;

  @Column()
  @IsNumberString({}, { message: 'Salário inválido' })
  salario: number;

  @Column({ default: 'admin' })
  role: string;

  @OneToMany(() => Agendamento, (agendamento) => agendamento.usuario)
  agendamentos: Agendamento[];
}
