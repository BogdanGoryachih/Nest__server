import { Category, } from "src/category/entities/category.entity";
import { Transaktion } from "src/transaktion/entities/transaktion.entity";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn,    UpdateDateColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn({name: 'name_id'})
    id:number

    @Column()
    email: string

    @Column()
    password: string

    @OneToMany(()=> Category, (category)=> category.user , {onDelete: 'CASCADE'})
    categories: Category[]

    @OneToMany(()=> Transaktion, (transaction) => transaction.user , {onDelete: 'CASCADE'})
    transaction: Transaktion[]

    @CreateDateColumn()
    createdAT: Date
 
    @UpdateDateColumn()
    updatedAT: Date
}
