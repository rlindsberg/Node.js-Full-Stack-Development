function doWork() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      console.log('done!');
      resolve();
    }, 1000);
  });
}

doWork().then(function() {
  return doWork(); //fire up another doWork after resolve.
}).then(function() {
    console.log('second doWork done!');
  }, function() {
    console.log('second doWork failed');
  });
