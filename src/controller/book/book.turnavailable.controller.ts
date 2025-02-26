import { Controller, HttpException, HttpStatus, Param, ParseUUIDPipe, Post } from "@nestjs/common";
import { BookTurnAvailableService } from "src/service/book/book.turnavailable.service";

@Controller('book')
export class BookTurnAvailableController {

    constructor(private readonly service: BookTurnAvailableService) { }

    @Post('status/:id')
    public async turnAvailable(@Param('id', new ParseUUIDPipe()) id: string): Promise<any> {
        try {
            return this.service.turnAvailable(id)
        } catch (error) {
            if (error instanceof HttpException)
                throw error

            throw new HttpException('Error turning book available.', HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}