import { Agendamento } from "src/agendamento/entities/agendamento.entity";
import { Cliente } from "src/cliente/entities/cliente.entity";
import { Servico } from "src/servicos/entities/servico.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class SolicitarServico {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    servicoId: number;

    @Column()
    quantidade: number;

    @Column()
    preco: number;

    @Column()
    total: number;

    @Column()
    agendamentoId: number;

    @ManyToOne(() => Agendamento, (agendamento) => agendamento.solicitacoes)
    @JoinColumn({ name: 'agendamentoId' })
    agendamento: Agendamento;

    @ManyToOne(() => Servico, (solicitacao) => solicitacao.solicitacoes)
    @JoinColumn({ name: 'servicoId' })
    servico: Servico;

    @ManyToOne(() => Cliente, (cliente) => cliente.solicitarServicos)
    @JoinColumn({ name: 'clienteId' })
    cliente: Cliente;

}