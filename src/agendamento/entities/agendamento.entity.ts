import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn } from "typeorm";
import { SolicitarServico } from "src/solicitarServico/entities/SolicitarServico.entity";
import { Usuario } from "src/usuarios/entities/usuario.entity";

@Entity()
export class Agendamento {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    usuarioId: number;

    @Column()
    total: number;

    @Column({ type: 'datetime' })
    dataAgendamento: Date;

    @OneToMany(() => SolicitarServico, (solicitacao) => solicitacao.agendamento)
    solicitacoes: SolicitarServico[];

    @ManyToOne(() => Usuario, (usuario) => usuario.agendamentos)
    @JoinColumn({ name: 'usuarioId' })
    usuario: Usuario;
}