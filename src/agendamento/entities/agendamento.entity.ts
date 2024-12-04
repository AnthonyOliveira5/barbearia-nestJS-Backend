import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import { SolicitarServico } from 'src/solicitarServico/entities/SolicitarServico.entity';
import { Usuario } from 'src/usuarios/entities/usuario.entity';
import { Cliente } from 'src/cliente/entities/cliente.entity';

@Entity()
export class Agendamento {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  usuarioId: number;

  @Column()
  clienteId: number;

  @Column()
  total: number;

  @Column({ type: 'datetime' })
  dataAgendamento: Date;

  @OneToMany(() => SolicitarServico, (solicitacao) => solicitacao.agendamento, {
    onDelete: 'CASCADE',
  })
  solicitacoes: SolicitarServico[];

  @ManyToOne(() => Usuario, (usuario) => usuario.agendamentos)
  @JoinColumn({ name: 'usuarioId' })
  usuario: Usuario;

  @ManyToOne(() => Cliente, (cliente) => cliente.agendamentos)
  @JoinColumn({ name: 'clienteId' })
  cliente: Cliente;
}
