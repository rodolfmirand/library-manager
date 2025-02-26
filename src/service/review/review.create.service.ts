import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ReviewRequest } from "src/dto/review.request";
import { Person } from "src/model/person.model";
import { Review } from "src/model/review.model";
import { Repository } from "typeorm";
import { NotFoundException } from "@nestjs/common";

@Injectable()
export class ReviewCreateService {

    constructor(
        @InjectRepository(Review) private reviewRepository: Repository<Review>,
        @InjectRepository(Person) private personRepository: Repository<Person>,
    ) { }

    public async create(reviewRequest: ReviewRequest): Promise<any> {
        const { authorId, bookId, text } = reviewRequest;

        const author = await this.personRepository.findOne({
            where: { id: authorId },
            relations: ['exchangedBooks']
        });
        if (!author) {
            throw new NotFoundException('Author not found');
        }

        const book = author.exchangedBooks.find(b => b.id === bookId);
        if (!book) {
            throw new NotFoundException('Book not found in exchanged books');
        }

        const review = this.reviewRepository.create({
            author,
            book,
            text
        });

        await this.reviewRepository.save(review);
        return { status: 'Review registered successfully.' }
    }
}