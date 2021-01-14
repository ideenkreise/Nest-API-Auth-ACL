
import { ApiProperty } from '@nestjs/swagger';
import { IsAlphanumeric, IsNotEmpty, MaxLength, MinLength } from 'class-validator';
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
