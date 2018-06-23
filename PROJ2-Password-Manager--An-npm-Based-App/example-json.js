//JSON CHALLENGE

//convert to js object
var animal = '{"name": "Higgs"}';
var pet = JSON.parse(animal);

//add age property
pet.age = 2;

//convert back to JSON
petJson = JSON.stringify(pet);

//log out
console.log(petJson);
