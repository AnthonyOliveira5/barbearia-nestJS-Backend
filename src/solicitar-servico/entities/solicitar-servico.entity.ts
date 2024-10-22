import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";


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

}
