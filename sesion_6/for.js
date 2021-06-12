// const mesesdelAnio = 12

// for (let i = 2; i <= mesesdelAnio; i+=2) {
//     console.log(i);   
// }

//i=0----i=1
    //hola
//i=1----i=2
    //hola
//i=2----i=3
    //hola
//i=3----i=4
    //hola
//i=4----

//Ejercicio de practica
//crear una funcion que me repita una cada n veces, entonces la funcion
//recibira como parametro la cadena y el valor de n
const texto ="hola desde visual studio code"

const repeat = (t)=>{
    t = t.replace(/ /g,'')
    for (let i = 0; i < t.length; i++) {
        if (t[i]!==' ') {
            console.log(t[i]);
        }
    }
}
repeat(texto)