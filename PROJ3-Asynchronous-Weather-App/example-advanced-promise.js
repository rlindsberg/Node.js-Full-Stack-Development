function doWork(shouldFail) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      if (typeof shouldFail === 'boolean' && shouldFail === true) { //no arg provided should also return resolve
        reject('failed!');
      } else {
        resolve('successed!');
      }
    }, 1000);
  });
}

doWork().then(function(successMessage) {
  console.log(successMessage);
  return doWork(true); //fire up another doWork after resolve.
}).then(function(successMessage) {
    console.log('second ' + successMessage);
  }).catch(function(error) {
    console.log(error);
  });
