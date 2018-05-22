function greetMaker(name){
  function greet(){
    console.log('Hello ' + name + '!');
  }
  return greet;
}

var greetRodde = greetMaker('Rodde');
greetRodde();
