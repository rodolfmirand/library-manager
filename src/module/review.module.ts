import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ReviewCreateController } from "src/controller/review/review.create.controller";
import { ReviewFindAllController } from "src/controller/review/review.findall.controller";
import { Review } from "src/model/review.model";
import { Book } from "src/model/book.model";
import { ReviewCreateService } from "src/service/review/review.create.service";
import { ReviewFindAllService } from "src/service/review/review.findall.service";
import { Person } from "src/model/person.model";
import { ReviewFindController } from "src/controller/review/review.find.controller";
import { ReviewFindService } from "src/service/review/review.find.service";

@Module({
    imports: [TypeOrmModule.forFeature([Review, Book, Person])],
    controllers: [ReviewCreateController, ReviewFindAllController, ReviewFindController],
    providers: [ReviewCreateService, ReviewFindAllService, ReviewFindService]
})
export class ReviewModule { }
