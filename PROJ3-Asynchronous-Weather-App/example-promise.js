//callback
function doWork(data, callback) {
  if (data === 'some data') {
    callback('Done!');
  } else if (data === 'no data') {
    callback('Error!')
  }

}

doWork('some data', function(someOtherData) {
  console.log(someOtherData);
})

//promises
function doWorkPromise(data) {
  return new Promise(function(resolve, reject) {
    if (data === 'some data') {
      resolve('Work is done!')
    } else if (data === 'no data') {
      reject({'error': 'Work error!'}) //return an object, so that multiple attr. can be returned
    }
  });
}

doWorkPromise('no data').then(function(data) {
  console.log(data);
}, function (error) {
  console.log(error);
}); //first resolve, second reject
