function greetMaker(name){
  function greet(){
    console.log('Hello ' + name + '!');
  }
  return greet;
}

var greetRodde = greetMaker('Rodde');
greetRodde();


function createAdder(baseNumber){
  return function add(numberToAdd){
    return baseNumber + numberToAdd;
  }
}

var addTen = createAdder(10);
console.log(addTen(2));
console.log(addTen(0));
console.log(addTen(-2));
