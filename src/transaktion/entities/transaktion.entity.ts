import { Category } from "src/category/entities/category.entity";
import { User } from "src/user/entities/user.entity";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Transaktion {
    @PrimaryColumn({name: 'transaktion_id'})
    id:number

    @Column()
    titel: string

    @Column()
    amount: number

    @Column({nullable:true})
    type:string

    @ManyToOne(()=> User ,(user)=> user.transaction)
    @JoinColumn({name: 'user_id'})
    user:User

    @ManyToOne(()=> Category,(category) => category.transaction)
    @JoinColumn({name: 'category_id'})
    category:Category

    @CreateDateColumn()
    createdAT: Date

    @UpdateDateColumn()
    updatedAT: Date
}
