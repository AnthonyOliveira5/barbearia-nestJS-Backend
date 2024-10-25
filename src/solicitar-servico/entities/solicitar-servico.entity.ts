import { Agendamento } from "src/agendamento/entities/agendamento.entity";
import { Servico } from "src/servicos/entities/servico.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class SolicitarServico {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    quantidade: number;

    @Column()
    preco: number;

    @Column()
    total: number;

    @Column()
    agendamentoId: number;

    @Column()
    servicoId: number;

    @ManyToOne(() => Agendamento, (agendamento) => agendamento.agendamentos)
    @JoinColumn({name: 'agendamentoId'})
    agendamento: Agendamento;

    @ManyToOne(() => Servico, (servico) => servico.servicos)
    @JoinColumn({name: 'servicoId'})
    servico: Servico;    

}
