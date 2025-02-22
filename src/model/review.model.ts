import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Person } from "./person.model";
import { Book } from "./book.model";

@Entity()
export class Review {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    author: Person

    @Column()
    text: string

    @ManyToOne(() => Book, book => book.reviews)
    book: Book
}