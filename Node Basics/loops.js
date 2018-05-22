var i = 0;
var countLimit = 8;

while (i < countLimit){
  console.log('while: ' + i);
  i ++;
}

for (var i = 0; i < countLimit; i++) {
  console.log('for: ' + i);
}

function countDown (startingPoint, stoppingPoint){
  for (var i = startingPoint; i >= stoppingPoint; i--) {
    console.log('Counting down: ' + i);
  }
}

countDown(10, 0);
