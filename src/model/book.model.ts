import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ConservationStatus } from "./enum/conservation-status.enum";
import { Review } from './review.model';
import { Exchange } from "./exchange.model";
import { Person } from "./person.model";

@Entity()
export class Book {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    title: string

    @Column()
    author: string

    @Column()
    edition: string

    @Column()
    conservationStatus: ConservationStatus

    @OneToMany(() => Review, review => review.book)
    reviews: Review[]

    @Column({ default: true })
    isAvailable: boolean

    @OneToMany(() => Exchange, exchanges => exchanges.book)
    exchanges: Exchange[]

    @ManyToOne(() => Person, person => person.booksForExchange)
    owner: Person
}
