import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ConservationStatus } from "./enum/conservation-status.enum";
import { Review } from './review.model';

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
}
