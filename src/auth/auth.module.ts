import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';


import { Module } from '@nestjs/common';
import { JwtStrategy } from './jwt.strategy';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';

@Module({
    imports: [
        UsersModule,
        JwtModule.register({
            secret: jwtConstants.secret,
            signOptions: { expiresIn: '1h' },
        }),
    ],
    controllers: [
        AuthController,],
    providers: [
        AuthService,
        JwtStrategy],
})
export class AuthModule { }
