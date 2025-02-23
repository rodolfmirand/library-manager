import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BookCreateController } from "src/controller/book/book.create.controller";
import { BookFindAllController } from "src/controller/book/book.findall.controller";
import { Book } from "src/model/book.model";
import { BookCreateService } from "src/service/book/book.create.service";
import { BookFindAllService } from "src/service/book/book.findall.service";

@Module({
    imports: [TypeOrmModule.forFeature([Book])],
    controllers: [BookCreateController, BookFindAllController],
    providers: [BookCreateService, BookFindAllService]
})
export class BookModule { }