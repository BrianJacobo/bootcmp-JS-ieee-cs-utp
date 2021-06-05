var superHero1 = {
  name: "Erick",
  lastName: "Paredes",
  age: 25,
  power: "programar con los ojos cerrados",
  presentacion(){
      return `hola mi nombre en ${this.name} y mi poder es ${this.power}`
  }
};

var superHero2 = {
  name: "Junior",
  lastName: "Enriquez",
  age: 26,
  power: "frontend developer",
  presentacion(){
    return `hola mi nombre en ${this.name} y mi poder es ${this.power}`
}
};

var superHero3 = {
  name: "Renato",
  lastName: "M.",
  age: 27,
  power: "backend developer",
  presentacion(){
    return `hola mi nombre en ${this.name} y mi poder es ${this.power}`
}
};
/*  */
var sayayinF3 = {
  name: "Rodrigo",
  lastName: "Dura",
  age: 25,
  power: "fullsctack",
  presentacion(){
    return `hola mi nombre en ${this.name} y mi poder es ${this.power}`
}
};

// const imprimePersonaje = (cosita) => {
//   return `Hola mi nombre es ${cosita.name} ${cosita.lastName} , tengo ${cosita.age} años y mi poder es ${cosita.power}`;
// };

// console.log(imprimePersonaje(superHero1));
// console.log(imprimePersonaje(superHero2));
// console.log(imprimePersonaje(superHero3));
// console.log(imprimePersonaje(sayayinF3));
console.log(superHero1.presentacion())
console.log(superHero2.presentacion())
console.log(superHero3.presentacion())
console.log(sayayinF3.presentacion())