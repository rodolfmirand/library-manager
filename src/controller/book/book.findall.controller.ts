import { Controller, Get } from "@nestjs/common";
import { BookFindAllService } from "src/service/book/book.findall.service";

@Controller('book')
export class BookFindAllController {

    constructor(private readonly service: BookFindAllService) { }

    @Get()
    public async find(): Promise<any> {
        return this.service.find()
    }
}