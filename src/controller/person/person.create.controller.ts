import { Body, Controller, HttpException, HttpStatus, Post } from "@nestjs/common";
import { PersonRequest } from "src/dto/person.request";
import { PersonCreateService } from "src/service/person/person.create.service";

@Controller('person')
export class PersonCreateController {

    constructor(private readonly service: PersonCreateService) { }

    @Post()
    public async create(@Body() body: PersonRequest): Promise<any> {
        try {
            return await this.service.create(body)
        } catch (error) {
            if (error instanceof HttpException) 
                throw error
            
            throw new HttpException('Error registering person.', HttpStatus.INTERNAL_SERVER_ERROR)
        }
    }
}