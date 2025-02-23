import { Column, Entity, JoinColumn, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Book } from "./book.model";
import { Review } from "./review.model";
import { Exchanges } from './exchanges.model';

@Entity()
export class Person {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @Column()
    password: string

    @ManyToMany(() => Book)
    exchangedBooks: Book[]

    @OneToMany(() => Review, review => review.author)
    reviews: Review[]

    @OneToMany(() => Exchanges, exchanges => exchanges.receiver)
    donations: Exchanges[]

    
    @OneToMany(() => Exchanges, exchanges => exchanges.donor)
    receipts: Exchanges[]
}