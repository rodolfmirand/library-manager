import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Review } from "src/model/review.model";
import { Repository } from "typeorm";

@Injectable()
export class ReviewFindService {

    constructor(@InjectRepository(Review) private reviewRepository: Repository<Review>) { }

    public async find(idBook: string): Promise<any> {
        const reviews = await this.reviewRepository.find({
            where: { book: { id: idBook } }, relations: ['book', 'author'], select: {
                author: {
                    name: true
                }
            }
        })

        if (!reviews)
            throw new NotFoundException('Book not found.')


        return reviews
    }
}