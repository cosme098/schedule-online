import { Module } from '@nestjs/common';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@nestjs/config';

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
                    password: "postgres",
                    database: "template0",
                    entities: [__dirname + './../../**/*.entity{.ts,.js}'],
                    synchronize: false,
                    schema: process.env.DATABASE_SCHEMA,
                }
            ),
        }),
    ],
})
export class TypeOrmConfigModule {

}