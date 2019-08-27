'use strict'

//programa que muestre todos los numeros entre dos numeros introducidos por el usuario
var menor = 0;
var mayor = 0;
do{
    var num1 = parseInt(prompt("Introduzca un numero entero","..."));
}while(!Number.isInteger(num1));

do{
    var num2 = parseInt(prompt("Introduzca un segundo numero entero","..."));
}while(!Number.isInteger(num2));

if(num1<num2){
    menor=num1;
    mayor=num2;
}else{
    menor=num2;
    mayor=num1;
}

for(let i=menor+1;i < mayor;i++){
    console.log(i);
}