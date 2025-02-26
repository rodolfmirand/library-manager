import { Body, Controller, HttpException, HttpStatus, Post } from "@nestjs/common";
import { ExchangeRequest } from "src/dto/exchange.request";
import { ExchangeCreateService } from "src/service/exchange/exchange.create.service";

@Controller('exchange')
export class ExchangeCreateController {

    constructor(private readonly service: ExchangeCreateService) { }

    @Post()
    public async create(@Body() exchangeRequest: ExchangeRequest): Promise<any> {
        try {
            this.service.create(exchangeRequest)
            return { status: "Exchange carried out successfully." }
        } catch (error) {
            throw new HttpException(error.message, HttpStatus.NOT_FOUND);
        }
    }
}