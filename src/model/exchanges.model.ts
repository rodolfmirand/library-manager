import { Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Book } from "./book.model";
import { Person } from "./person.model";

@Entity()
export class Exchanges {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @ManyToOne(() => Book, book => book.exchanges)
    book: Book

    @ManyToOne(() => Person, person => person.donations)
    donor: Person

    @ManyToOne(() => Person, person => person.receipts)
    receiver: Person
}