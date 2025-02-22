import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Person } from "src/model/person.model";
import { Repository } from "typeorm";

@Injectable()
export class PersonFindAllService {

    constructor(@InjectRepository(Person) private model: Repository<Person>) { }

    public async findAll(): Promise<Person[]> {
        return await this.model.find()
    }
}