import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';


import { Module } from '@nestjs/common';
import { JwtStrategy } from './jwt.strategy';

@Module({
    imports: [],
    controllers: [
        AuthController,],
    providers: [
        AuthService,
        JwtStrategy],
})
export class AuthModule { }
