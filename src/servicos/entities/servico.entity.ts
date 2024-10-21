import { Entity, Column, PrimaryGeneratedColumn, Timestamp } from "typeorm";

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

}