
import { IsArray, IsString, MinLength, ArrayMinSize } from 'class-validator';
export class CreateBookDto {
    @IsString()
    @MinLength(3)
    name: string;

    @IsString()
    author: string;

    @IsString()
    title: string;

    @IsArray()
    @ArrayMinSize(1)
    tags:string[]
}

