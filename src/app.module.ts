import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { Module } from '@nestjs/common';
import { TypeOrmConfigModule } from './infrastructure/config/typeorm/typeorm.module';
import { ConfigModule } from '@nestjs/config';
import { User } from './users/entities/user.entity';
import { JwtStrategy } from './auth/jwt.strategy';

@Module({
  imports: [
    AuthModule,
    UsersModule, TypeOrmConfigModule,
  ],
  controllers: [],
  providers: [
    JwtStrategy
  ],
})
export class AppModule { }
