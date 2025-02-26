import { Controller, Get, Param, ParseUUIDPipe } from "@nestjs/common";
import { ReviewFindService } from "src/service/review/review.find.service";

@Controller('review')
export class ReviewFindController {

    constructor(private readonly service: ReviewFindService) { }

    @Get(':id')
    public async find(@Param('id', new ParseUUIDPipe()) idBook: string): Promise<any> {
        return this.service.find(idBook)
    }
}