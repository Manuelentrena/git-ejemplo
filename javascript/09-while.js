'use strict'

//bucle while

let year = 2018;
var contador = year;
var diferencia = 0;

while(contador < 2025){
    contador++;
    diferencia=diferencia+1;
}

console.log("Entre el año "+year+" y en año 2025 hay "+ diferencia+" años de diferencia");


//Do while

var condicion = 20;
var tope = 30;

do{
    console.log("Mi condicion vale"+condicion);
    condicion++;
    break;
}while(condicion <= tope);