abstract class Animal{
    edad:number
}
class Persona extends Animal{
    nombre:string   
    public constructor(){
        
        super()
        
    }
}

const nuevapersona = new Persona()
const animal = new Animal()