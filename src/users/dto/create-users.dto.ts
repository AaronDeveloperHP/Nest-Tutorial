import { IsEmail, IsNotEmpty, IsNumber, IsString, IsPositive } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty()
    @IsString()
    firstName: string

    @IsNotEmpty()
    @IsString()
    lastName: string

    @IsEmail()
    @IsNotEmpty()
    @IsString()
    email: string

    @IsNotEmpty()
    @IsString()
    password: string

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    age:number
}