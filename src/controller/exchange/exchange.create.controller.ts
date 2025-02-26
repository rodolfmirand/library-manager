import { Body, Controller, HttpException, HttpStatus, Post } from "@nestjs/common";
import { ExchangeRequest } from "src/dto/exchange.request";
import { ExchangeCreateService } from "src/service/exchange/exchange.create.service";

@Controller('exchange')
export class ExchangeCreateController {

    constructor(private readonly service: ExchangeCreateService) { }

    @Post()
    public async create(@Body() exchangeRequest: ExchangeRequest): Promise<any> {
        try {
            return await this.service.create(exchangeRequest)
        } catch (error) {
            if (error instanceof HttpException) 
                throw error
            
            throw new HttpException('Error registering exchange.', HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}