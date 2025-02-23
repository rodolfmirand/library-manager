import { Body, Controller, Param, ParseUUIDPipe, Post } from "@nestjs/common";
import { BookRequest } from "src/dto/book.request";
import { BookCreateService } from "src/service/book/book.create.service";

@Controller('book')
export class BookCreateController {

    constructor(private readonly service: BookCreateService) { }

    @Post(':id')
    public async create(@Param('id', new ParseUUIDPipe()) idPerson: string, @Body() bookRequest: BookRequest): Promise<any> {
        return this.service.create(idPerson, bookRequest)
    }
}