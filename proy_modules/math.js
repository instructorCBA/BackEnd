const Functions= {};

/*Funcion Clasica Sumar
function sumar(datos1,datos2) { 
    return Number(datos1)+Number(datos2);
}
*/

const venta = (precio,presentacion,cantidad) => {
    let total = (precio*presentacion*cantidad).toLocaleString();
    return total;
}


//Funcion Flecha Sumar
const sumar = (datos1,datos2) => {
    return datos1+datos2;
}

/*Funcion Clasica Restar
function restar(datos1,datos2) {
    return datos1-datos2;
}
*/

//Funcion Flecha Restar
const restar = (datos1,datos2) => {
    return datos1-datos2;
}

//Funcion Flecha Restar
const dividir = (datos1,datos2) => {
    let resultado = 0;
/*
    if (datos2==0) {
        resultado = "ERROR: No se puede dividir por cero(0)";
    } else {
        resultado = datos1/datos2;
    }
    return resultado;

    if (datos2==0) {
        let datos2 = Math.round(Math.random() * 9);
    }
    return datos1/datos2;
*/
    let contador = 0;
    while (datos2==0) {
        datos2 = Math.round(Math.random() * 9);
        contador = contador + 1;
    }
    resultado = "NUMERO DE VECES: " + contador + " datos2: " + datos2 + " valor: " + (datos1/datos2).toFixed(2);
    return resultado;
} 

const sueldo = (dias,valor) => {
    return dias*(valor/30);
}

const tablas = () => {
    for (let index1 = 1; index1 < 13; index1++) {
        console.log(`Tabla de Multiplicar: `.red + `${index1}`.bgGreen);
        for (let index = 1; index < 11; index++) {
            console.log(index1*index);           
        }
    }
/*
    let contMultiplicando = 1;
    while (contMultiplicando<=12) {
        console.log(`Tabla de Multiplicar: `.red + `${contMultiplicando}`.bgGreen);
        let contMultiplicador = 1;
        while (contMultiplicador <= 20) {
            console.log(contMultiplicando*contMultiplicador);
            contMultiplicador = contMultiplicador + 1;
        }
        contMultiplicando = contMultiplicando + 1;       
    }
*/
    return 'Final de la tabla';
}

const comparativo = (datos1, datos2) => {
    let sw = true;
    while (sw==true) {
        if (datos1 > datos2) {
            console.log(`El numero datos1: ` + `${datos1}` + ` es mayor que el numero datos2: ` + `${datos2}`);
        } else if (datos1 < datos2){
            console.log(`El numero datos2: ` + `${datos2}` + ` es mayor que el numero datos1: ` + `${datos1}`);
        } else {
            sw = false;
            console.log(`El numero datos1: ` + `${datos2}` + ` es igual al numero datos2: ` + `${datos1}`);
        }

        datos1 = (Math.random() * 10).toFixed(2); 
        datos2 = (Math.random() * 10).toFixed(2);
    }

 
    return 'Comparativo finalizo';
    
}

const esPar = dato => {
    if(dato%2===0){
        return true;
    } else {
        return false;
    }
}

const formatoTexto = dato => {
    let nuevoTexto = dato[0].toUpperCase() + dato.substring(2).toLowerCase();
    return nuevoTexto;
}


/*
    sueldoMensual
    facturarProducto
    edadAprendiz
    areaCuadrado
    areaCirculo
*/

Functions.sumar = sumar;
Functions.restar = restar;
Functions.dividir = dividir;
Functions.sueldo = sueldo;
Functions.venta = venta;
Functions.tablas = tablas;
Functions.comparativo = comparativo;
Functions.esPar = esPar;
Functions.formatoTexto = formatoTexto;
module.exports = Functions;




