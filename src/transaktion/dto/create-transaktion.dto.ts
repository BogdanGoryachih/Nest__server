import { IsNotEmpty, IsNumber, IsOptional, IsString, MinLength } from "class-validator"
import { Category } from "src/category/entities/category.entity"
import { User } from "src/user/entities/user.entity"

export class CreateTransaktionDto {
    @IsNotEmpty()
    title: string

    @IsNotEmpty()
    @IsNumber()
    amount: number

    @IsString()
    @MinLength(5)
    type: 'expense' | 'income'

    @IsNotEmpty()
    category: Category
     
    @IsOptional()
    user?: User
}
