import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Book } from "./book.model";
import { Review } from "./review.model";
import { Exchange } from './exchange.model';

@Entity()
export class Person {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column({ unique: true })
    name: string

    @Column()
    email: string

    @Column()
    password: string

    @ManyToMany(() => Book)
    @JoinTable()
    exchangedBooks: Book[]

    @OneToMany(() => Book, book => book.owner)
    booksForExchange: Book[]

    @OneToMany(() => Review, review => review.author)
    reviews: Review[]

    @OneToMany(() => Exchange, exchanges => exchanges.receiver)
    donations: Exchange[]

    @OneToMany(() => Exchange, exchanges => exchanges.donor)
    receipts: Exchange[]
}