import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ExchangeCreateController } from "src/controller/exchange/exchange.create.controller";
import { ExchangeFindAllController } from "src/controller/exchange/exchange.findall.controller";
import { Book } from "src/model/book.model";
import { Exchange } from "src/model/exchange.model";
import { Person } from "src/model/person.model";
import { ExchangeCreateService } from "src/service/exchange/exchange.create.service";
import { ExchangeFindAllService } from "src/service/exchange/exchange.findall.service";

@Module({
    imports: [TypeOrmModule.forFeature([Exchange, Person, Book])],
    controllers: [ExchangeCreateController, ExchangeFindAllController],
    providers: [ExchangeCreateService, ExchangeFindAllService]
})
export class ExchangeModule { }