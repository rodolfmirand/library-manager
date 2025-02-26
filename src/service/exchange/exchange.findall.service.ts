import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Exchange } from "src/model/exchange.model";
import { Repository } from "typeorm";

@Injectable()
export class ExchangeFindAllService {

    constructor(@InjectRepository(Exchange) private exchangeRepository: Repository<Exchange>) { }

    public async find() {
        return this.exchangeRepository.find({
            relations: ['donor', 'receiver', 'book'],
            select: {
                donor: {
                    id: true,
                    name: true
                },
                receiver: {
                    id: true,
                    name: true
                }
            }
        })
    }
}