import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn} from "typeorm";
import { SolicitarServico } from "src/solicitar-servico/entities/solicitar-servico.entity"; 

@Entity()
export class Agendamento {

    @PrimaryGeneratedColumn()
    id: number;

}

