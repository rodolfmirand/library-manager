import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Book } from "src/model/book.model";
import { Repository } from "typeorm";

@Injectable()
export class BookTurnAvailableService {

    constructor(@InjectRepository(Book) private bookRepository: Repository<Book>) { }

    public async turnAvailable(id: string): Promise<any> {
        const book = await this.bookRepository.findOne({ where: { id: id } })

        if (!book)
            throw new NotFoundException('Book not found')

        book.isAvailable = true

        await this.bookRepository.save(book)

        return { status: 'Book is now available' }
    }
}