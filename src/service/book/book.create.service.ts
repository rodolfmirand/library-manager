import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BookRequest } from "src/dto/book.request";
import { Book } from "src/model/book.model";
import { Person } from "src/model/person.model";
import { Repository } from "typeorm";

@Injectable()
export class BookCreateService {

    constructor(@InjectRepository(Book) private bookRepository: Repository<Book>,
        @InjectRepository(Person) private personRepository: Repository<Person>) { }

    public async create(idPerson: string, bookRequest: BookRequest): Promise<any> {
        const person = await this.personRepository.findOne({ where: { id: idPerson }, relations: ['booksForExchange'] })

        if (!person)
            throw new NotFoundException('Person not found')

        const book = this.bookRepository.create({ ...bookRequest, owner: person })

        await this.bookRepository.save(book)

        return { status: 'Book registered successfully!' }
    }
}