import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Person } from "src/model/person.model";
import { Repository } from "typeorm";
import { PersonRequest } from '../../dto/person.request';

@Injectable()
export class PersonCreateService {

    constructor(@InjectRepository(Person) private model: Repository<Person>) { }

    public async create(personRequest: PersonRequest): Promise<any> {
        await this.model.save(personRequest)
        return { status: 'Person registered successfully.' }
    }
}