/*EJERCICIO 1
Escribir el código de una función a la que se pasa como parámetro un número entero 
y devuelve como resultado una cadena de texto que indica si el número es par o impar. 
Mostrar por pantalla el resultado devuelto por la función.*/
const ejercicio1 = (param)=>{
    if (param==0) {
        var texto = "0 no es un numero aceptado"
        console.log(texto);
    }else if (param%2==0) {
        console.log("el numero es par");
    }else{
        console.log("el numero es impar");
    }   
}
ejercicio1(16)

/*EJERCICIO 2
Escribir el código de una función para calcular el area de un circulo*/

/*EJERCICIO 3
Escribir el código de una función para calcular el area de un cuadrado*/

/*EJERCICIO 4
Escribir el código de una función que reciba como parametro una cadena e imprima como mensaje
la cantidad de caracteres que tiene esta, el valor del primer caracter y el valor del ultimo caracter

ejemplo:
function tarea2("hola mundo")
como respuesta==>
1.cantidad de caracteres de la cadena==>10*
2.valor del primer caracter============>"h"
3.valor del ultimo caracter============>"o"*/


/*EJERCICIO 5
Escribir el código de una función que reciba como parametro una cadena e imprima como
mensaje "cantidad de caracteres permitido" si el tamaño de la cadena es menor o igual a 10, de lo contrario imprima
como mensaje "cantidad de caracteres no permitidos, intentelo de nuevo"*/
