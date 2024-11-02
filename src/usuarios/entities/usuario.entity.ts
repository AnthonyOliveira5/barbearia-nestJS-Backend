import { Agendamento } from "src/agendamento/entities/agendamento.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";

@Entity()
export class Usuario {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    email:string;

    @Column()
    senha: string;

    @OneToMany(() => Agendamento, (agendamento) => agendamento.usuario)
    agendamentos: Agendamento[];

}   
