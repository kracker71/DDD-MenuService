import { Entity, PrimaryGeneratedColumn, Column,CreateDateColumn,UpdateDateColumn } from "typeorm";

@Entity()
export class Menu {
    @PrimaryGeneratedColumn()
    id_menu!: number;

    @Column('varchar')
    name: string

    @Column('varchar')
    description: string

    @Column('float')
    price: number

    @Column('varchar')
    category: string

    @Column('varchar')
    img_name: string

    @Column('bool')
    is_delete: boolean = false

    @CreateDateColumn()
    createAt: Date

    @UpdateDateColumn()
    updateAt: Date
}
