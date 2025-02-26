import { Controller, Get, HttpException, HttpStatus, Param, ParseUUIDPipe } from "@nestjs/common";
import { ReviewFindService } from "src/service/review/review.find.service";

@Controller('review')
export class ReviewFindController {

    constructor(private readonly service: ReviewFindService) { }

    @Get(':id')
    public async find(@Param('id', new ParseUUIDPipe()) idBook: string): Promise<any> {
        try {
            return await this.service.find(idBook)
        } catch (error) {
            if (error instanceof HttpException)
                throw error

            throw new HttpException('Error finding review.', HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}