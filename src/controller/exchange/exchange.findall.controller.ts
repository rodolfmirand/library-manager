import { Controller, Get } from "@nestjs/common";
import { ExchangeFindAllService } from "src/service/exchange/exchange.findall.service";

@Controller('exchange')
export class ExchangeFindAllController {

    constructor(private readonly service: ExchangeFindAllService) { }

    @Get()
    public async find(){
        return this.service.find()
    }
}