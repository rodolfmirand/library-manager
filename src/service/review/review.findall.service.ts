import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Review } from "src/model/review.model";
import { Repository } from "typeorm";

@Injectable()
export class ReviewFindAllService {
    
    constructor(@InjectRepository(Review) private model: Repository<Review>) { }

    public async findAll(): Promise<Review[]> {
        return await this.model.find({ relations: ['author', 'book'] });
    }
}
