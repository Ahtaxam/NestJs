import { Injectable } from '@nestjs/common';

@Injectable()
export class NinjaService {
  private ninjas = [
    { id: 0, name: 'Sasuke', weaponName: 'Kunai' },
    { id: 1, name: 'Naruto', weaponName: 'Rasengan' },
    { id: 2, name: 'Sakura', weaponName: 'Chakra' },
  ];

  getHello(): string {
    return 'Hello World!';
  }


  getNinjs(weaponName: string) {

    if (weaponName) {
      return this.ninjas.filter((ninja) => ninja.weaponName === weaponName);
    }

    return this.ninjas;
  }

  getOneNinja(id: number) {
    if (!this.ninjas.find((ninja) => ninja.id === (id))) {
      throw new Error('Ninja not found');
    }

    return this.ninjas.find((ninja) => ninja.id === (id));
  }


  createNinja(name:string, weaponName:string){
    const ninja = {
        id:this.ninjas.length,
        name,
        weaponName
    }
    
    this.ninjas.push(ninja);    
    return ninja;
  }


  updateNinja(id:string, name:string, weaponName:string){
    const ninja = this.ninjas.find((ninja) => ninja.id === parseInt(id));
    
    if(!ninja){
        return {message:"Ninja not found"}
    }
    ninja.name = name;
    ninja.weaponName = weaponName;
    
    return ninja;
  }


  deleteNinja(id:string){
    const ninja = this.ninjas.find((ninja) => ninja.id === parseInt(id));
    if(!ninja){
        return {message:"Ninja not found"}
    }
    this.ninjas = this.ninjas.filter((ninja) => ninja.id !== parseInt(id));
    return {message:"Ninja deleted"}
  }
}
