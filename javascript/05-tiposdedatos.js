'use strict'

//vemos los operadores y tipos de datos
var num1 = 7;
var num2 = 12;
var op = num1*num2;

console.log("Resultado: "+op);

//Tipos de datos

var num_ent = 44;
var cadena_texto = 'hola "que" ase'; //las comilass de los extremos son las que prevalecen
var boolean = true;
console.log(cadena_texto);

//Funciones para convertir tipos de datos a otros tipos de datos
var num_false = "33.3";
console.log(Number(num_false)+7);
console.log(parseInt(num_false)+7);
console.log(parseFloat(num_false)+7);
console.log(String(num1)+String(num2));


//Typeof nos dice el tipo de dato
console.log(typeof(num_false));
console.log(typeof(boolean));
console.log(typeof(num2));
console.log(typeof(num1));
