import { IsEmail, MinLength } from "class-validator";

export class CreateUserDto {
    @IsEmail()
    email:string

    @MinLength(6, {message:'минимальная длинна 6 значений '})
    password: string
}
