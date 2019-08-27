'use strict'

//calculadora, haga operaciones suma resta multiplicar y dividor de dos datos introducidos por teclado

do{
    var num1 = parseInt(prompt("Introduzca un numero entero","..."));
}while(!Number.isInteger(num1));

do{
    var num2 = parseInt(prompt("Introduzca un segundo numero entero","..."));
}while(!Number.isInteger(num2));

console.log("La suma es: "+(num1+num2));
document.write("<h1>La suma es "+(num1+num2)+"</h1>");
console.log("La resta es: "+(num1-num2));
document.write("<h1>La resta es "+(num1-num2)+"</h1>");
console.log("La multiplicacion es: "+(num1*num2));
document.write("<h1>La multiplicación es "+(num1*num2)+"</h1>");
if(num2==0){
    console.log("la división es imposible");
    document.write("<h1>la división es imposible</h1>");
}else{
    console.log("La division es: "+(num1/num2));
    document.write("<h1>La dicisión es "+(num1/num2)+"</h1>");
}

