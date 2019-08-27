'use strict'
//Condifional IF

var edad = 13;
var nombre = "Juan";

if(edad>12){
    console.log("La edad de "+nombre+" es "+edad+" y es mayor o igual a 12");
}else{
    console.log("La edad de "+nombre+" es "+edad+" y es menor a 12");
}

//Año bisiesto

var año = 2200;

if(año%4==0 && (año%100!=0 || año%400==0)){
    console.log("El año es bisiesto");
}else{
    console.log("El año no es bisiesto");
}


