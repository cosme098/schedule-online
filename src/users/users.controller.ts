
import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { ApiTags } from "@nestjs/swagger";
import { CreateUserDto } from './dto/create-user.dto';
import { FindUserDto } from './dto/find-user.dto';
import { UpdateUserDto } from './dto/update-username.dto';

@ApiTags("users")
@Controller("users")
export class UsersController {

    constructor() { }

    @Post()
    async create(@Body() user: CreateUserDto) {
        return "This action adds a new user";
    }

    @Get(":username")
    async findOne(@Body() username: FindUserDto) {
        return `This action returns a #${username}`;
    }

    @Patch(":username")
    async update(@Body() user: UpdateUserDto) {
        return `This action updates a #${user.username}`;
    }
}
