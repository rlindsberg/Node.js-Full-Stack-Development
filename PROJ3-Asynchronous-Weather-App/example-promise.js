//callback
function doWork(data, callback) {
  if (data === 'some data') {
    callback('Done!');
  } else if (data === 'no data') {
    callback('Error!')
  }

}

doWork('some data', function(someOtherData){
  console.log(someOtherData);
})
