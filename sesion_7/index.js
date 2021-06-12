// ---------JavaScript Array Methods-----------
// The JavaScript method toString() converts an array to a string of (comma separated) array values.*/
const carros = ["carro1","carro2","carro3","carro4"]
console.log(carros);
carrosToString = carros.toString()
console.log(carrosToString);
console.log('\n');
let utilesEscolares = ['lapiz','borrador','tajador','plumon','resaltador']
let uEtoString = utilesEscolares.toLocaleString()
console.log(uEtoString);

// The join() method also joins all array elements into a string.
// It behaves just like toString(), but in addition you can specify the separator:
console.log(utilesEscolares.join("-"));
console.log(utilesEscolares.join("."));
console.log('\n');

// The pop() method removes the last element from an array:
// The pop() method returns the value that was "popped out":
let popUtilesEscolares = utilesEscolares.pop()
console.log(utilesEscolares);
console.log("usando pop ",popUtilesEscolares);
console.log('\n');
// The push() method adds a new element to an array (at the end):
let pushUtilesEscolares = utilesEscolares.push("goma")
console.log(utilesEscolares);
console.log("usando push ",pushUtilesEscolares);
console.log('\n');
// Shifting is equivalent to popping, working on the first element instead of the last.
// The shift() method removes the first array element and "shifts" all other elements to a lower index.
// The shift() method returns the string that was "shifted out":
let shiftUtilesEscolares = utilesEscolares.shift()
console.log(utilesEscolares);
console.log("usando shift ",shiftUtilesEscolares);
console.log('\n');

// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements:
let unshiftUtilesEscolares = utilesEscolares.unshift(39)
console.log(utilesEscolares);
console.log("usando unshift ",unshiftUtilesEscolares);

// The Splice()
let splicetUtilesEscolares = utilesEscolares.splice(2,0,"correcto","folder")
console.log(utilesEscolares);
console.log("usando splice ",splicetUtilesEscolares);

