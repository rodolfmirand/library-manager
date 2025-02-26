import { Body, Controller, Post, HttpException, HttpStatus } from "@nestjs/common";
import { ReviewRequest } from "src/dto/review.request";
import { ReviewCreateService } from "src/service/review/review.create.service";

@Controller('review')
export class ReviewCreateController {

    constructor(private readonly service: ReviewCreateService) { }

    @Post()
    public async create(@Body() body: ReviewRequest): Promise<any> {
        try {
            return await this.service.create(body);
        } catch (error) {
            if (error instanceof HttpException)
                throw error

            throw new HttpException('Error registering review.', HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}