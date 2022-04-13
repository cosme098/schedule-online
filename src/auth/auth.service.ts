
import { HttpException, Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {

    constructor(private readonly userService: UsersService,
        private jwtService: JwtService,) { }

    async login(user: any) {

        const userFound = await this.userService.findByEmail(user.email);
        if (userFound && userFound.password === user.password) {
            const payload = { username: userFound.username, sub: userFound.id };
            return {
                access_token: this.jwtService.sign(payload),
            };
        }
        throw new HttpException('Invalid credentials', 401);
    }
}

