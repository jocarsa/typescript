var Ciudades;
(function (Ciudades) {
    Ciudades[Ciudades["Valencia"] = 0] = "Valencia";
    Ciudades[Ciudades["Barcelona"] = 1] = "Barcelona";
    Ciudades[Ciudades["Madrid"] = 2] = "Madrid";
    Ciudades[Ciudades["Bilbao"] = 3] = "Bilbao";
})(Ciudades || (Ciudades = {}));
var ciudadactual = Ciudades.Barcelona;
console.log(ciudadactual);
