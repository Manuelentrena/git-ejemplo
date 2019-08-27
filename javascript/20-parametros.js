'use strict'

//Parametros REST y SPREAD

function listadofrutas(fruta1,fruta2,...listado_de_frutas){
    console.log(fruta1);
    console.log(fruta2);
    console.log(listado_de_frutas);
}
listadofrutas("Naranja","Manzana","Sandia","Pera","Melon","Coco");
var frutas = ["Naranja","Pera","Limón","Sandia","melón"];

listadofrutas(...frutas,"Sandia","Pera","Melon","Coco");
