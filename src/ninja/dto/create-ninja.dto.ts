import {IsString, Min, IsEnum, MinLength} from 'class-validator'

export class createNinjaDto{

    @IsString()
    @MinLength(3)
    name:string

    @IsEnum(["Kunai", "Rasengan", "Chakra"], {message:"Weapon must be Kunai, Rasengan or Chakra"})
    weaponName:string
}