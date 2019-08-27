'use strict'

//Usamos switch

var edad = 75;
var texto = "";

switch(edad){
    case 18:
        texto = "Eres mayor de edad";
    break;
    case 25:
        texto = "Ya eres un adulto";
    break;
    case 40:
        texto = "Crisis de los cuarenta";
    break;
    case 75:
        texto = "Eres ya un anciano";
    break;
    default:
        texto = "No eres nadie";
    break;
}

console.log(texto);
