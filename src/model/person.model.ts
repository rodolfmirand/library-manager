import { Column, Entity, JoinColumn, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Book } from "./book.model";

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
}