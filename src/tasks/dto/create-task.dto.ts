import { IsBoolean, IsNotEmpty, IsString, MinLength } from 'class-validator';

export class createTaskDto {
    @IsString()
    @MinLength(1)
    title : string
    @IsBoolean()
    status : boolean
}