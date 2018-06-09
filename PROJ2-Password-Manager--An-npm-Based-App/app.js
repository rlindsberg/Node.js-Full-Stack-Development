console.log('Starting application');

//include third party modules using require
var storage = require('node-persist');
storage.initSync();

storage.setItemSync('accounts', [{
  username: 'rlindsberg',
  balance: 0
}]);

console.log(storage.getItemSync('accounts'));
