import { Controller, Get, Param, ParseUUIDPipe } from "@nestjs/common";
import { BookFindAllByPersonService } from "src/service/book/book.findall.byperson.service";

@Controller('book')
export class BookFindAllByPersonController {

    constructor(private readonly service: BookFindAllByPersonService) { }

    @Get(':id')
    public async find(@Param('id', new ParseUUIDPipe()) id: string): Promise<any> {
        return this.service.find(id)
    }
}