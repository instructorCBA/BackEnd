const Notas = {};

function NombreCompleto(nombre1,nombre2,apellido1,apellido2) {
    return nombre1 + " " + nombre2 + " " + apellido1 + 
           " " + apellido2;
}

Notas.NomCom = NombreCompleto;

module.exports = Notas;
