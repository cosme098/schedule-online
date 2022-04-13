import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserDto } from './auth.dto';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './jwt-auth.guard';

@ApiTags("auth")
@Controller("api/auth")
export class AuthController {

    constructor(private readonly userService: AuthService) { }

    @Post("login")
    login(@Body() user: UserDto) {
        return this.userService.login(user);
    }
}
