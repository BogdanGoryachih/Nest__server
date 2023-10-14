import { Transaktion } from "src/transaktion/entities/transaktion.entity";
import { User } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Category {
    @PrimaryGeneratedColumn({name: 'category_id'})
    id:number

    @Column()
    title:string

    @ManyToOne(()=> User,(user)=> user.categories)
    @JoinColumn({name:"user_id"})
    user:User

    @OneToMany(()=>Transaktion,(transaction)=> transaction.category)
    transaction:Transaktion[]

    @CreateDateColumn()
    createdAT: Date

    @UpdateDateColumn()
    updatedAT: Date

}
