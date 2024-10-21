import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  emailUsuario: string;

  @Column()
  dataNascimentoUsuario: Date;

  @Column()
  salarioUsuario: number;
}
