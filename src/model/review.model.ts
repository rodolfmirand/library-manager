import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Person } from "./person.model";
import { Book } from "./book.model";

@Entity()
export class Review {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @ManyToOne(() => Person, person => person.reviews)
    author: Person

    @Column()
    text: string

    @ManyToOne(() => Book, book => book.reviews)
    book: Book
}