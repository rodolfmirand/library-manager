import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Person } from "src/model/person.model";
import { Repository } from "typeorm";

@Injectable()
export class BookFindAllByPersonService {

    constructor(@InjectRepository(Person) private personRepository: Repository<Person>) { }

    public async find(idPerson: string): Promise<any> {
        const person = await this.personRepository.findOne({ where: { id: idPerson }, relations: ['booksForExchange','exchangedBooks'] })
        
        if(!person)
            throw new NotFoundException('Person not found')

        return person.booksForExchange
    }
}