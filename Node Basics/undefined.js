var name;
console.log(name);

function doesNothing(){

}

console.log(doesNothing());

console.log('How to use undefined in an if statement:');
name = undefined;
if (name === undefined) {
  console.log('name is undefined');
}

console.log('How to use typeof:');
if (typeof x === 'undefined') {
  console.log('x if undefined');
}

function greetUser(myname){
  if (typeof myname === 'undefined') {
    console.log('Hello stranger!');
  } else {
    console.log('Hello ' + myname + '!');
  }
}

var xyz;
greetUser('Linn');
greetUser(xyz);
