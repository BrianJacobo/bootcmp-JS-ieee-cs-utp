
const function2 = (param1, param2)=>{
    console.log("hola desde function2",param1,param2);
}
palabra=" prueba oracion "
// function1(palabra, 21)
// function2(palabra, 21)
//Callbacks
// setTimeout(function function1() {
//     console.log("hola desde function1");
// },4000)

const test1= ()=>{
    console.log("hola desde test1");
}

const test2= ()=>{
    console.log("hola desde test2");
}

const prueba3 = (callback,param)=>{
    callback()
    console.log(`hola mi nombre es ${param}`);
}
let name = "Rodrigo"
prueba3(test2,name)
