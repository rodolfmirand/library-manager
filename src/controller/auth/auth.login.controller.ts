import { Body, Controller, Post } from "@nestjs/common";
import { AuthLoginService } from "src/service/auth/auth.login.service";
import { LoginRequest } from "src/dto/login.request";

@Controller('auth')
export class AuthLoginController {
    
    constructor(private readonly authLoginService: AuthLoginService) {}

    @Post('login')
    public async login(@Body() loginRequest: LoginRequest): Promise<any> {
        return this.authLoginService.login(loginRequest);
    }
}
