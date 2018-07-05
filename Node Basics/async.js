function printInTwoSeconds(message) {
  setTimeout(function(){
    console.log(message);
  }, 2000)
}

printInTwoSeconds('CHALLENGE');
console.log('Hello async!');
