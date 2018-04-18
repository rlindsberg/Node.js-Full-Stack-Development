var isValid = false;

function isVarValid(booleanVar){
  if (booleanVar) {
    console.log('Data is valid!');
  } else if (booleanVar === false) {
    console.log('Data is not valid!');
  }
}

function toogleBool (booleanVar){
  if (typeof booleanVar === 'boolean') {
    return !booleanVar;
  }
}

isVarValid(isValid);
var isValid = toogleBool(isValid);
isVarValid(isValid);
