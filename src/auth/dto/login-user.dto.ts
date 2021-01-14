
import { ApiProperty } from '@nestjs/swagger';
import { MinLength, MaxLength, IsString, IsAlphanumeric, IsEmail, IsNotEmpty } from 'class-validator';
export class LoginUserDto {

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


}
