import { SolicitarServico } from "src/solicitar-servico/entities/solicitar-servico.entity";
import { Entity, Column, PrimaryGeneratedColumn, Timestamp, OneToMany } from "typeorm";

export class Servico {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    tipoServico: string;

    @Column()
    descricaoServico: string;

    @Column()
    precoServico: number;

    @Column()
    duracaoServico: number;
    
    @Column()
    statusServico: boolean;

    @OneToMany(() => SolicitarServico, (servico) => servico.tipoServico)
    servicos: SolicitarServico[];

}