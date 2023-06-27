class Persona{
    private nombre:string
    
    public ponNombre(nuevonombre:string){
        this.nombre = nuevonombre
    }
    public dameNombre():string{
        return this.nombre
    }
}

const JoseVicente = new Persona()
JoseVicente.ponNombre("Juan")
console.log(JoseVicente.dameNombre())