/*EJERCICIO 1
Escribir el código de una función a la que se pasa como parámetro un número entero 
y devuelve como resultado una cadena de texto que indica si el número es par o impar. 
Mostrar por pantalla el resultado devuelto por la función.*/
function ParImpar(num){
    if(num%2==0){
        return `el número ${num} es par`
    }
    else{
        return `el número ${num} es impar`
    }
};
/*EJERCICIO 2
Escribir el código de una función para calcular el area de un circulo*/
function areaCirculo(radio){
    pi = Math.PI;
    return pi * Math.pow(radio,2);
}
/*EJERCICIO 3
Escribir el código de una función para calcular el area de un cuadrado*/
function areaCuadrado(lado){
    return Math.pow(lado,2);
}
/*EJERCICIO 4
Escribir el código de una función que reciba como parametro una cadena e imprima como mensaje
la cantidad de caracteres que tiene esta, el valor del primer caracter y el valor del ultimo caracter
ejemplo:
function tarea2("hola mundo")
como respuesta==>
1.cantidad de caracteres de la cadena==>10*
2.valor del primer caracter============>"h"
3.valor del ultimo caracter============>"o"*/

function cadena(parametro){
    numCaracteres = parametro.length;
    primerCaracter = parametro.charAt(0);
    ultimoCaracter = parametro.charAt(parametro.length -1);
    return `La cantidad de caracteres de la cadena es ${numCaracteres}, el primer caracter es ${primerCaracter} y el último caracter es ${ultimoCaracter}`
}

/*EJERCICIO 5
Escribir el código de una función que reciba como parametro una cadena e imprima como
mensaje "cantidad de caracteres permitido" si el tamaño de la cadena es menor o igual a 10, de lo contrario imprima
como mensaje "cantidad de caracteres no permitidos, intentelo de nuevo"*/
function cadenaPermitida(cadena){
    if(cadena.length<=10){
        return `Cantidad de caracteres permitido`
    }
    else{
        return `Cantidad de caracteres no permitidos, intentelo de nuevo`
    }
}