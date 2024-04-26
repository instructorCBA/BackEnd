/*
ARCHIVO = INDEX.JS
FUNCION = programa principal que imprime en pantalla el resultado
        de las funciones Suma,Resta, Multiplicacion y Division.
AUTOR = Ing. Jorge 
Version:    1.0 4/03/2024 :: 
            2.0 15/05/2024
*/
require('colors');

const math=require('./proy_modules/math.js');
const notas=require('./proy_modules/notas.js');

/*
se define la variables datos1 
que contiene un valor entero aleatorio entre 0 y 30
*/
let datos1 = (Math.random() * 10).toFixed(2); //5.5
/*
se define la variables datos1 
que contiene un valor entero aleatorio entre 0 y 10
*/
let datos2 = (Math.random() * 10).toFixed(2);

console.log('******************'.red);
/*
let datos = [123,254,567,234,678,456,97,890,56,456,345,12414];

console.log(datos);
for (let index = 0; index < datos.length; index++) {
        if (datos[index]%2 === 0) {
                console.log(`el numero ${datos[index]} es PAR`);                
        } else {
                console.log(`el numero ${datos[index]} es IMPAR`);
        }
        
}
*/
let datos = ['FELIPE','maria','CARLOS',46,28,'Juan','pEDRO',235,'SaNdRa',245235];
console.log(datos);
for (let dato of datos){
     let tipoDato = typeof dato;
     if (tipoDato == 'number'){
        if (math.esPar(dato)) {
                console.log(`el dato ${dato} es un NÚMERO PAR`);               
        } else {
                console.log(`el dato ${dato} es un NÚMERO IMPAR`);                         
        }
     } else if(tipoDato== 'string'){
        console.log(`El dato ${dato} cambia de formato a ${math.formatoTexto(dato)}`);
     } 
}


//console.log(math.comparativo(datos1,datos2));
//console.log(math.tablas());
/*
let precio = (Math.random() * (2000 - 4000) + 4000).toFixed(2);
console.log(`Precio por Unidad de 1lts: `.bgGreen + `${'$'+ precio.toLocaleString()}`.yellow);
let nro = 1;
let nroMax = Math.round(Math.random() * 9);
while (nro<=nroMax) {
        let presentacion = Math.round(Math.random() * (1 - 3) +3);
        let cantidad = Math.round(Math.random() * 9);
        console.log(`Nro Venta: `.bgGreen + nro + ` gaseosa: `.red + `presentacion: `.yellow + presentacion + ` lts `.yellow +
        `cantidad: ` + cantidad + ` Unidades ` + `total a pagar: $` + math.venta(precio, presentacion, cantidad));
        nro = nro + 1;
}
console.log('******************'.red);
*/
/*console.log('**** Funciones ****'.bgGreen);
console.log(`**`.blue + `   Suma(`.yellow + `${datos1}`.red +
         `+`.yellow + `${datos2}`.red + `) = `.yellow + 
         `${math.sumar(datos1,datos2)}`.green);
console.log(notas.NomCom('ana','lucia','gil','orozco'));

console.log(math.dividir(datos1,datos2));
*/