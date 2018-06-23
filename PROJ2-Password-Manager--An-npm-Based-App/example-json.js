var person = {
  name: 'Lind',
  age: 20
};

var personJSON = JSON.stringify(person);

console.log(personJSON);
console.log("personJSON's type is " + typeof personJSON);

//convert json back to an object
var personObject = JSON.parse(personJSON);
console.log(personObject.name);
console.log(personObject.age);
console.log("personObject's type is " + typeof(personObject));
