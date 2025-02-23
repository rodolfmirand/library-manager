import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Person } from "src/model/person.model";
import { Repository } from "typeorm";

@Injectable()
export class PersonFindAllService {

    constructor(@InjectRepository(Person) private model: Repository<Person>) { }

    public async findAll(): Promise<Person[]> {
        const people = await this.model.find({ relations: ['booksForExchange', 'exchangedBooks'] })

        people.forEach(person => {
            person.booksForExchange = person.booksForExchange.filter(book => book.isAvailable)
        })

        return people
    }
}