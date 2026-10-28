import {
    
    Entity,
    PrimaryGeneratedColumn,
    Column

} from 'typeorm'

@Entity('clinica') 

export class Clinica {
    @PrimaryGeneratedColumn()
    id!:number;
    
    @Column({length:30})
    raça!: string;

    @Column({length:40})
    especie!: string;

    @Column({length:400})
    origem!: string;

    @Column ({default: true})
    sexo!: boolean;

    @Column ({type: 'int'})
    idade!: number;


}