import { Body, Controller, Post, HttpException, HttpStatus } from "@nestjs/common";
import { ReviewRequest } from "src/dto/review.request";
import { ReviewCreateService } from "src/service/review/review.create.service";

@Controller('review')
export class ReviewCreateController {
    
    constructor(private readonly service: ReviewCreateService) { }

    @Post()
    public async create(@Body() body: ReviewRequest): Promise<any> {
        try {
            const review = await this.service.create(body);
            return { status: 'Review created successfully!', review };
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.NOT_FOUND);
        }
    }
}