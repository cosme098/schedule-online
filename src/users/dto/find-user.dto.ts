import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsNotEmpty } from 'class-validator';

export class FindUserDto {
    @ApiProperty()
    @IsNotEmpty()
    name: string;
}