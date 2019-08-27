'use strict'

//Decidme si un numero introducido por teclado es par o impar

do{
    var num = parseInt(prompt("Introduzca un numero entero","..."));

    if(num%2==0){
        console.log("El "+num+" es par");
    }else if(isNaN(num)){
        console.log("Hasta luego!");
    }else{
        console.log("El "+num+" es impar");
    }

}while(Number.isInteger(num));

