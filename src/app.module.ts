import { UsersModule } from './users/users.module';
import { Module } from '@nestjs/common';
import { TypeOrmConfigModule } from './infrastructure/config/typeorm/typeorm.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    UsersModule, TypeOrmConfigModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule { }
