//**************functions()*****************//
// function miPrimeraFuncion() {
//     console.log("Hola esta es mi primera funcion")
// }
// miPrimeraFuncion()

// function  suma(x,y) {
//     resultado = x+y
//     return resultado    
// }
// console.log(suma(12,1));
/******************************************/

// const miPrimeraFuncion1 = () =>{
//     console.log("Hola esta es mi primera funcion")
// }
// miPrimeraFuncion1()

// const suma1 = (x,y)=>{
//     var resultado = x + y
//     return resultado
// }
// console.log(suma1(12,1));

// var a = 20
// var b = 40
// var c = 7

// //quiero obtener el mayor de 2 numeros ingresados sumado con 7
// const numeroMayor = (a,b,c)=>{
//     if (a>b) {
//         return a + c
//     }else if (a<b) {
//         return b + c
//     }else{
//         return "los numeros son iguales"
//     }
// }
// console.log(numeroMayor(a,b,c));


//**************Common HTML Events**********//
    // onchange
    const onchange = () => {
        console.log("hola desde funcion onchange()");
    }
    
    // onclick
    // const html = ()=>{
    //     alert("este es un alert desde index.js")
    // }
    // // onmouseover
    // const onMouseOver=()=>{
    //     console.log("hola desde funcion onMouseOver()");
    //     document.getElementById("test").innerHTML = " hola desde MOuse Over"
    // }
    // // onmouseout
    // const onMouseOut=()=>{
    //     console.log("hola desde funcion onMouseOut()");
    // }
    // // onkeydown
    // const onKeyDownPaolo=()=>{
    //     alert("hola desde onkeyDownPaolo")
    // }
    // // onload
    // const onLoadRenato=()=>{
    //     console.log("cargando onload")
    // }
//**************StringMethods***************//
    // length()
    var str = "hola mundo mundo mundo mundo gaseosa"
    console.log(str.length);

    // indexOf()
    //console.log(str.indexOf("mundo"));
    // lastIndex()
    //console.log(str.lastIndexOf("mundo"));
    // indexOf(x,y)
    //console.log(str.indexOf("mundo",10));
    // lastIndex(,)
    console.log(str.lastIndexOf("mundo",10))
    // search()-----TAREA
    // slice(start, end)
    console.log(str.slice(7,16))
    // substring(start, end)
    // The difference is that substring() cannot accept negative indexes.
    // substr(start, length)
    // The difference is that the second parameter specifies the length of the extracted part.
