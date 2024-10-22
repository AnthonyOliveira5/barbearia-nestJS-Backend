import { Agendamento } from "src/agendamento/entities/agendamento.entity";
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from "typeorm";

@Entity()
export class Usuario {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    email:string;

    @OneToMany(() => Agendamento, (agendamento) => agendamento.usuario)
    agendamentos: Agendamento[];

}   
