import { SolicitarServico } from 'src/solicitarServico/entities/SolicitarServico.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

@Entity()
export class Cliente {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nomeCliente: string;

  @Column({unique: true})
  CPFCliente: string;

  @Column({unique: true})
  emailCliente: string;
  
  @Column()
  senhaCliente: string;

  @Column()
  telefoneCliente: string;

  @Column({ type: 'date' })
  dataNascimentoCliente: Date;

  @Column()
  enderecoCliente: string;

  @Column({ default: 'cliente' })
  role: string;

  @OneToMany(() => SolicitarServico, (solicitarServico) => solicitarServico.cliente)
  solicitarServicos: SolicitarServico[];
}
