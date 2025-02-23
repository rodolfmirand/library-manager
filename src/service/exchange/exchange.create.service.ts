import { Injectable, NotAcceptableException, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { ExchangeRequest } from "src/dto/exchange.request";
import { Book } from "src/model/book.model";
import { Exchange } from "src/model/exchange.model";
import { Person } from "src/model/person.model";
import { Repository } from "typeorm";

@Injectable()
export class ExchangeCreateService {

    constructor(@InjectRepository(Exchange) private exchangeRepository: Repository<Exchange>,
        @InjectRepository(Person) private personRepository: Repository<Person>,
        @InjectRepository(Book) private bookRepository: Repository<Book>) { }

    public async create(exchangeRequest: ExchangeRequest) {

        const donor = await this.personRepository.findOne({ where: { id: exchangeRequest.idDonor }, relations: ['booksForExchange'] })
        if (!donor)
            throw new NotFoundException('Donor not found')

        const receiver = await this.personRepository.findOne({ where: { id: exchangeRequest.idReceiver }, relations: ['exchangedBooks'] })
        if (!receiver)
            throw new NotFoundException('Receiver not found')


        const book = await this.bookRepository.findOne({ where: { id: exchangeRequest.idBook } })
        if (!book)
            throw new NotFoundException('Book not found')

        if(!book.isAvailable)
            throw new NotAcceptableException('Book not available')

        donor.booksForExchange = donor.booksForExchange.filter(b => b.id !== exchangeRequest.idBook)

        receiver.exchangedBooks.push(book)

        book.owner = receiver
        book.isAvailable = false

        const exchange = this.exchangeRepository.create({
            donor: { id: donor.id },
            receiver: { id: receiver.id },
            book: { id: book.id },
            date: new Date()
        })

        await this.personRepository.save(donor)
        await this.personRepository.save(receiver)
        await this.bookRepository.save(book)
        await this.exchangeRepository.save(exchange)

        return { status: "Exchange carried out successfully." }
    }
}