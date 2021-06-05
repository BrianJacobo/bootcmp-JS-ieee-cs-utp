//**********STRINGS********************* */
// var mensaje1 = "hola mundo"
// var mensaje2 = 'hola mundo'
// var nombre = "brian"
// var edad = "22"
// var mensaje3 = `hola mi nomnbre es ${nombre} y mi edad es ${edad} :D`


var x//declarando "x"
x = "pedro"//inicializando "x"
var y= "kenyi"//declarando e inicializando "y"
y="keiko"

var porcentajeX = 50
var porcentajeY = 50

if (porcentajeX > porcentajeY) {
    var respuesta = `${x} tiene mayor porcentaje de aprobacion que ${y}`    
}else if (porcentajeX < porcentajeY) {
    var respuesta = `${x} tiene menor porcentaje de aprobacion que ${y}`
}else if (porcentajeX == porcentajeY) {
    var respuesta = `hola ${x} y ${y} han empatado`
}
console.log(respuesta)