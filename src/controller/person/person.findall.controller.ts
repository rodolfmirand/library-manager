import { Controller, Get } from "@nestjs/common";
import { Person } from "src/model/person.model";
import { PersonFindAllService } from "src/service/person/person.findall.service";

@Controller('person')
export class PersonFindAllController {

    constructor(private readonly service: PersonFindAllService) { }

    @Get()
    public async find(): Promise<Person[]> {
        return this.service.findAll()
    }
}