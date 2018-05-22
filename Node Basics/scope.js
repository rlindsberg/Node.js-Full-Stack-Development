//global variable.
var age = 23;
//age is accessable anywhere inside the program
console.log('Accessing age inside the main program');
console.log(age);

function localFunction(){
  console.log('Accessing age inside a function');
  console.log(age);
  var name = 'Rodde';
  console.log('Accessing name inside the function it is defined');
  console.log(name);
}

localFunction();

console.log('Accessing name outside the function it is defined');
console.log(name);
