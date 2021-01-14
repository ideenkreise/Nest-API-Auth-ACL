
import { ApiProperty } from '@nestjs/swagger';
import { IsAlphanumeric, IsEmail, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
import { Role } from '../entities/role.entity';
export class CreateUserDto {
    user_id: string;

    @MinLength(4)
    @MaxLength(20)
    @IsAlphanumeric()
    @ApiProperty()
    @IsNotEmpty()
    user_name: string;

    @MinLength(4)
    @MaxLength(20)
    @ApiProperty()
    @IsNotEmpty()
    password: string;

    @MinLength(2)
    @MaxLength(20)
    @IsString()
    @ApiProperty()
    name: string;

    @MinLength(2)
    @MaxLength(20)
    @IsString()
    @ApiProperty()
    phone: string;

    @MinLength(2)
    @MaxLength(40)
    @IsEmail()
    @ApiProperty()
    email: string;

    @ApiProperty()
    roles: Role[];
}
