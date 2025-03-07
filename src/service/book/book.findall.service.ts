import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Book } from "src/model/book.model";
import { Repository } from "typeorm";

@Injectable()
export class BookFindAllService {

    constructor(@InjectRepository(Book) private model: Repository<Book>) { }

    public async find(): Promise<Book[]> {
        return await this.model.find({
            where: { isAvailable: true },
            relations: ['owner'],
            select: {
                owner: {
                    id: true,
                    name: true
                }
            }
        })
    }
}