import { SolicitarServico } from "src/solicitarServico/entities/SolicitarServico.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";

@Entity()
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

    @OneToMany(() => SolicitarServico, (servico) => servico.servico)
    servicos: SolicitarServico[];

}