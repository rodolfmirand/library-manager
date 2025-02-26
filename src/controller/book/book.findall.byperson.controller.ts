import { Controller, Get, HttpException, HttpStatus, Param, ParseUUIDPipe } from "@nestjs/common";
import { BookFindAllByPersonService } from "src/service/book/book.findall.byperson.service";

@Controller('book')
export class BookFindAllByPersonController {

    constructor(private readonly service: BookFindAllByPersonService) { }

    @Get(':id')
    public async find(@Param('id', new ParseUUIDPipe()) id: string): Promise<any> {
        try {
            return await this.service.find(id)
        } catch (error) {
            if (error instanceof HttpException)
                throw error

            throw new HttpException('Error finding book by person id.', HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}