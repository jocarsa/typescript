var estados;
(function (estados) {
    estados[estados["NoEncontrado"] = 404] = "NoEncontrado";
    estados[estados["OK"] = 200] = "OK";
    estados[estados["ErrorDeServidor"] = 500] = "ErrorDeServidor";
})(estados || (estados = {}));
console.log(estados.NoEncontrado);
