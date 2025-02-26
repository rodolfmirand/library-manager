import { Controller, Get } from "@nestjs/common";
import { Review } from "src/model/review.model";
import { ReviewFindAllService } from "src/service/review/review.findall.service";

@Controller('review')
export class ReviewFindAllController {
    
    constructor(private readonly service: ReviewFindAllService) { }

    @Get()
    public async find(): Promise<Review[]> {
        return this.service.findAll();
    }
}