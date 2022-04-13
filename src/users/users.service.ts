

import { Injectable, UseGuards } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { FindOneOptions, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-username.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {

    constructor(@InjectRepository(User) private user: Repository<User>) { }

    async create(newUser: CreateUserDto): Promise<any> {
        return this.user.save(newUser);
    }
    async findByEmail(email: string): Promise<any> {
        return this.user.findOneOrFail({ where: { email: email } });
    }
    async findAll() {
        return this.user.find();
    }
    async update(userUpdate: UpdateUserDto): Promise<any> {
        return this.user.update(userUpdate?.id, userUpdate);
    }
}
