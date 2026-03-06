
import {IsEmail, IsNotEmpty, IsString, Max, MaxLength} from 'class-validator';

export class CreateUserDto {
    
    @IsNotEmpty()
    @IsString()
    @MaxLength(20)
    username: string;


    @IsNotEmpty()
    @IsString()
    @MaxLength(100)
    displayName: string;

    @IsNotEmpty()
    @IsEmail()
    email: string;
}