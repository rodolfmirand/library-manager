import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { BookCreateController } from "src/controller/book/book.create.controller";
import { BookFindAllByPersonController } from "src/controller/book/book.findall.byperson.controller";
import { BookFindAllController } from "src/controller/book/book.findall.controller";
import { BookTurnAvailableController } from "src/controller/book/book.turnavailable.controller";
import { Book } from "src/model/book.model";
import { Person } from "src/model/person.model";
import { BookCreateService } from "src/service/book/book.create.service";
import { BookFindAllByPersonService } from "src/service/book/book.findall.byperson.service";
import { BookFindAllService } from "src/service/book/book.findall.service";
import { BookTurnAvailableService } from "src/service/book/book.turnavailable.service";

@Module({
    imports: [TypeOrmModule.forFeature([Book, Person])],
    controllers: [BookCreateController, BookFindAllController, BookFindAllByPersonController, BookTurnAvailableController],
    providers: [BookCreateService, BookFindAllService, BookFindAllByPersonService, BookTurnAvailableService]
})
export class BookModule { }