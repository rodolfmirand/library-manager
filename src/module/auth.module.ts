import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AuthLoginController } from "src/controller/auth/auth.login.controller";
import { AuthLoginService } from "src/service/auth/auth.login.service";
import { Person } from "src/model/person.model";

@Module({
    imports: [TypeOrmModule.forFeature([Person])],
    controllers: [AuthLoginController],
    providers: [AuthLoginService]
})
export class AuthModule { }
