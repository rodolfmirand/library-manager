import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PersonCreateController } from "src/controller/person/person.create.controller";
import { PersonFindAllController } from "src/controller/person/person.findall.controller";
import { Book } from "src/model/book.model";
import { Person } from "src/model/person.model";
import { PersonCreateService } from "src/service/person/person.create.service";
import { PersonFindAllService } from "src/service/person/person.findall.service";

@Module({
    imports: [TypeOrmModule.forFeature([Person, Book])],
    controllers: [PersonCreateController, PersonFindAllController],
    providers: [PersonCreateService, PersonFindAllService]
})
export class PersonModule { }