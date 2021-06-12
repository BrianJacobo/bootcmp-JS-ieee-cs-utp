clasificaciones = 'Ana,Oswaldo,Raúl,Cecilia,María,Antonio'
let clasificados  = clasificaciones.split(",");

//EJERCICIO 1
//IMPRIME CLASIFICADOS ACTUAL
console.log(`Ejercicio 1 ${clasificados}`);

//EJERCICIO 2
//CECICLIA ADELANTA A RAÚL
//TEST
// console.log(clasificados.indexOf("Cecilia"));
// console.log(clasificados.indexOf("Raúl"));
var Cecilia = clasificados[3]
var Raul = clasificados[2]
clasificados[2]=Cecilia
clasificados[3]=Raul
console.log(`Ejercicio 2 ${clasificados}`);

//EJERCICIO 3
//ANTONIO ES DESCALIFICADO Y ELIMINADO
clasificados.pop()
console.log(`Ejercicio 3 ${clasificados}`);

//EJERCICIO 4
//Detrás de Ana y antes de Oswaldo se 
//clasifican dos nuevos concursantes: Roberto 
//y Amaya, en ese orden
//TEST
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(2, 0, "Lemon", "Kiwi");
// console.log(fruits);
clasificados.splice(1,0,"Roberto","Amaya")
console.log(`Ejercicio 4 ${clasificados}`);

//EJERCICIO 5
//Hay una nueva participante que pasa a encabezar la clasificación: Marta
clasificados.unshift("Marta")
console.log(`Ejercicio 5 ${clasificados}`);