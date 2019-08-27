'use strict'

//Funciones 

function calculadora(num1,num2,mostrar =false){

    if(mostrar==true){
        console.log("Suma "+(num1+num2));
        console.log("Resta "+(num1-num2));
        console.log("Multiplicar "+(num1*num2));
        console.log("Division "+(num1/num2));
        console.log("-------------------");
    }else{
        document.write("Suma "+(num1+num2)+"<br>");
        document.write("Resta "+(num1-num2)+"<br>");
        document.write("Multiplicar "+(num1*num2)+"<br>");
        document.write("Division "+(num1/num2)+"<br>");
        document.write("----------------"+"<br>");
    }

    return 0;
}

//parámetros opcionales
calculadora(1,4);
calculadora(2,5,true);
calculadora(3,3,true);
