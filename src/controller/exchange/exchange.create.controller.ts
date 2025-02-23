import { Body, Controller, Post } from "@nestjs/common";
import { ExchangeRequest } from "src/dto/exchange.request";
import { ExchangeCreateService } from "src/service/exchange/exchange.create.service";

@Controller('exchange')
export class ExchangeCreateController {

    constructor(private readonly service: ExchangeCreateService) { }

    @Post()
    public async create(@Body() exchangeRequest: ExchangeRequest): Promise<any> { 
        return this.service.create(exchangeRequest)
    }
}