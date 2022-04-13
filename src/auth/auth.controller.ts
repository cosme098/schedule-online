import { Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { JwtAuthGuard } from './jwt-auth.guard';

@ApiTags("auth")
@Controller("api/auth")
export class AuthController {

    constructor() { }

    @UseGuards(JwtAuthGuard)
    @Post("login")
    login() {
        return "test"
    }
}
