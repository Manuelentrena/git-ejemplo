'use strict'

//Usar bucle mostrar la suma y la media de los datos introducidos por el 
var suma = 0;
var num = 0;
var ciclo = -1;
do{
    ciclo++;
    suma = suma + num;
    var num = parseInt(prompt("Introduzca un numero entero","..."));
}while(Number.isInteger(num) && num >= 0);

if(ciclo==0){
    console.log("La media es 0");
}else{
    console.log("La media es "+suma/ciclo);
}

console.log("La suma total es: "+suma);
