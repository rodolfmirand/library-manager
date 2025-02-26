import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ReviewCreateController } from "src/controller/review/review.create.controller";
import { ReviewFindAllController } from "src/controller/review/review.findall.controller";
import { Review } from "src/model/review.model";
import { Book } from "src/model/book.model";
import { ReviewCreateService } from "src/service/review/review.create.service";
import { ReviewFindAllService } from "src/service/review/review.findall.service";
import { Person } from "src/model/person.model";

@Module({
    imports: [TypeOrmModule.forFeature([Review, Book, Person])],
    controllers: [ReviewCreateController, ReviewFindAllController],
    providers: [ReviewCreateService, ReviewFindAllService]
})
export class ReviewModule {}
