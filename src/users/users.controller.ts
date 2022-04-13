
import { Body, Controller, Get, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from "@nestjs/swagger";
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-username.dto';
import { UsersService } from './users.service';

@ApiTags("users")
@Controller("api/users")
export class UsersController {

    constructor(private readonly test: UsersService) { }

    @Post()
    async create(@Body() user: CreateUserDto) {
        return this.test.create(user);
    }

    @UseGuards(JwtAuthGuard)
    @Get(":username")
    async findOne(@Body() username: any) {
        return this.test.findOne(username);
    }

    @UseGuards(JwtAuthGuard)
    @Patch(":username")
    async update(@Body() user: UpdateUserDto) {
        return this.test.update(user);
    }
}
