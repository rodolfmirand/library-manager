import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { BookRequest } from "src/dto/book.request";
import { Book } from "src/model/book.model";
import { Repository } from "typeorm";

@Injectable()
export class BookCreateService {

    constructor(@InjectRepository(Book) private model: Repository<Book>) { }

    public async create(bookRequest: BookRequest): Promise<any> {
        await this.model.save(bookRequest)
        return { status: 'Book registered successfully!' }
    }
}