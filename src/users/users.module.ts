import { UsersService } from './users.service';
import { UsersController } from './users.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';
import { User } from './entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [
        UsersController,],
    providers: [
        UsersService,
    ],
    exports: [
        UsersService,
    ],
})
export class UsersModule { }
