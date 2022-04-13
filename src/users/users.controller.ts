
import { Body, Controller, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-username.dto';
import { UsersService } from './users.service';

@ApiTags("users")
@Controller("api/user")
export class UsersController {

    constructor(private readonly userService: UsersService) { }

    @Post()
    async create(@Body() user: CreateUserDto) {
        return this.userService.create(user);
    }

    @UseGuards(JwtAuthGuard)
    @Get(":username")
    async findOne(@Param("username") username: string) {
        return this.userService.findByEmail(username);
    }

    @UseGuards(JwtAuthGuard)
    @Patch(":username")
    async update(@Body() user: UpdateUserDto) {
        return this.userService.update(user);
    }
}
