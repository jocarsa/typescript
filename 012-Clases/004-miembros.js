var Persona = /** @class */ (function () {
    function Persona() {
    }
    Persona.prototype.ponNombre = function (nuevonombre) {
        this.nombre = nuevonombre;
    };
    Persona.prototype.dameNombre = function () {
        return this.nombre;
    };
    return Persona;
}());
var JoseVicente = new Persona();
JoseVicente.ponNombre("Juan");
console.log(JoseVicente.dameNombre());
