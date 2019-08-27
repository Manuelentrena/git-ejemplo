'use strict'

//Programa que pida dos numeros y que nos diga quien es el mayor o el menor o si son iguales


do{
    var num1 = parseInt(prompt("Introduzca un numero entero","..."));
}while(!Number.isInteger(num1));

do{
    var num2 = parseInt(prompt("Introduzca un segundo numero entero","..."));
}while(!Number.isInteger(num2));

if(num1>num2){
    console.log("El número "+num1+" es mayor que el número "+num2);
}else if(num1==num2){
    console.log("El número "+num1+" es igual al número "+num2);
}else{
    console.log("El número "+num1+" es menor que el número "+num2);
}




