import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';
import { User } from 'src/users/entities/user.entity';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [],
            inject: [],
            useFactory: (): TypeOrmModuleOptions => (
                {
                    type: 'postgres',
                    host: "localhost",
                    port: 5432,
                    username: "postgres",
                    password: "cosme",
                    database: "schedule",
                    entities: [User],
                    synchronize: true,
                }
            ),
        }),
    ],
})
export class TypeOrmConfigModule {

}