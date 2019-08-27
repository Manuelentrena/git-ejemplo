'use strict'

//Tabla de multiplicar de un numero introducido por pantalla

do{
    var num =parseInt(prompt("Introduce numero de la tabla de multiplicar","..."));
}while(!Number.isInteger(num));
if(num >= 0 && num <= 10){
    for(let i=1;i <= 10; i++){
        console.log(num+"X"+i+"="+num*i);
    }
}else{
    console.log("Hasta luego!");
}

//Todas las tablas de multiplicar

for(let i=1;i <= 10; i++){
    console.log("La tabla del "+i);
    for(let c=1;c <= 10;c++){
        console.log(i+"X"+c+"="+i*c);
    }
}

