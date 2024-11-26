import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nomeCliente: string;

  @Column()
  CPFCliente: string;

  @Column()
  emailCliente: string;

  @Column({ type: 'date' })
  dataNascimentoCliente: Date;

  @Column()
  enderecoCliente: string;

}
