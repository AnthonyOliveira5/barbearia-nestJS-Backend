import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn} from "typeorm";
import { SolicitarServico } from "src/solicitarServico/entities/SolicitarServico.entity"; 
import { Usuario } from "src/usuarios/entities/usuario.entity";

@Entity()
export class Agendamento {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    total: number;

    @Column()
    usuarioId: number;

    @OneToMany(() => SolicitarServico, (servico) => servico.agendamento)
    agendamentos: SolicitarServico[];

    @ManyToOne(() => Usuario, (usuario) => usuario.agendamentos)
    usuario: Usuario;
}

