import { Body, Controller, Post } from "@nestjs/common";
import { PersonRequest } from "src/dto/person.request";
import { PersonCreateService } from "src/service/person/person.create.service";

@Controller('person')
export class PersonCreateController {

    constructor(private readonly service: PersonCreateService) { }

    @Post()
    public async create(@Body() body: PersonRequest): Promise<any> {
        return this.service.create(body)
    }
}