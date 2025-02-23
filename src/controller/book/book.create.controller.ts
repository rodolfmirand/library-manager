import { Body, Controller, Post } from "@nestjs/common";
import { BookRequest } from "src/dto/book.request";
import { BookCreateService } from "src/service/book/book.create.service";

@Controller('book')
export class BookCreateController {

    constructor(private readonly service: BookCreateService) { }

    @Post()
    public async create(@Body() bookRequest: BookRequest): Promise<any> {
        return this.service.create(bookRequest)
    }
}