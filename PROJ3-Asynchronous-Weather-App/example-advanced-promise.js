function doWork(shouldFail) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      if (shouldFail === true) {
        console.log('done!');
        reject('failed!');
      } else {
        resolve();
      }
    }, 1000);
  });
}

doWork().then(function() {
  return doWork(true); //fire up another doWork after resolve.
}).then(function() {
    console.log('second doWork done!');
  }).catch(function(error) {
    console.log(error);
  });
