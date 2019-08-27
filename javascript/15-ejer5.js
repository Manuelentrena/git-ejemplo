'use strict'

//Mostrar todos los números divisores de 1 hasta un numero introducido por teclado


do{
    var num = parseInt(prompt("Introduzca un numero entero","..."));
}while(!Number.isInteger(num));

for(let i=1;i<=num;i++){
    if(num%i==0){
        console.log("Divisor:"+i)
    }
    
}