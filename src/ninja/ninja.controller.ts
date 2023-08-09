import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put, Query, Req,Header, Redirect, NotFoundException, ParseIntPipe, UseGuards, SetMetadata,ValidationPipe, UsePipes } from '@nestjs/common';
import { createNinjaDto } from './dto/create-ninja.dto';
import { updateNinjaDto } from './dto/update-ninja.dto';
import { NinjaService } from './ninja.service';
import { NinjaGuard } from './ninja.guard';
import { ValidationInputPipe } from './validation.pipe';

interface Ninja {
    id: number,
    name: string,
    weaponName: string
}



enum WeaponEnum {
    Kunai = "Kunai",
    Rasengan = "Rasengan",
    Chakra = "Chakra"
}

@Controller('ninja')
export class NinjaController {
    constructor(private readonly service:NinjaService){}


    @Get('hello')
    // @HttpCode(200)
    // @Header('Token', 'hjskd78392g')
    // @Redirect('http://localhost:3000/ninja', 301)
    getHello(@Req() request:Request):string{
        // console.log(request);
        return this.service.getHello();
    }

    @Get()
    getNinjas(@Query('weapon') weapon:WeaponEnum):Ninja[] | {message:string}{
        return this.service.getNinjs(weapon);
    }


    @Get(':id')
    // @UsePipes(ValidationInputPipe)
    getOneNinja(@Param('id', new ValidationInputPipe()) id:number):Ninja | {message:string}{
        try {
            return this.service.getOneNinja(id);
        }
        catch (error) {
            throw new NotFoundException
        }
    }

    @Post()
    @UseGuards(new NinjaGuard())
    // @SetMetadata('roles', ['admin'])
    createNinja(@Body(new ValidationPipe()) createninjadto:createNinjaDto):Ninja{
        return this.service.createNinja(createninjadto.name, createninjadto.weaponName);
    }

    @Delete(':id')
    deleteNinja(@Param('id') id:string){
        return this.service.deleteNinja(id);
    }

    @Put(':id')
    updateNinja(@Param('id') id:string, @Body() updateninjadto:updateNinjaDto){
        return this.service.updateNinja(id, updateninjadto.name, updateninjadto.weaponName);
    }

}
