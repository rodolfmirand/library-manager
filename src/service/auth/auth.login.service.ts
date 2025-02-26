import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { LoginRequest } from "src/dto/login.request";
import { Person } from "src/model/person.model";
import { Repository } from "typeorm"

@Injectable()
export class AuthLoginService {
    constructor(
        @InjectRepository(Person) private personRepository: Repository<Person>
    ) {}

    public async login(loginRequest: LoginRequest): Promise<any>{
        const person = await this.personRepository.findOne({ where: { email: loginRequest.email } });

        if (!person)
            throw new NotFoundException('Person not found');

        if (person.password != loginRequest.password)
            throw new NotFoundException('Invalid Password');

        return { id: person.id };
    }
}