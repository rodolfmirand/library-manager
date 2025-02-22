import { Column, Entity, JoinColumn, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Book } from "./book.model";
import { Review } from "./review.model";

@Entity()
export class Person {

    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    name: string

    @Column()
    password: string

    @ManyToMany(() => Person)
    @JoinColumn()
    friends: Person[]

    @ManyToMany(() => Book)
    exchangedBooks: Book[]

    @OneToMany(() => Review, review => review.author)
    reviews: Review[]
}