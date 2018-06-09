console.log('Starting application');

//include third party modules using require
var storage = require('node-persist');
storage.initSync();

storage.setItemSync('accounts', [{
  username: 'rlindsberg',
  balance: 0
}]);

var bankAccounts = storage.getItemSync('accounts');

console.log('push on a new account..');
bankAccounts.push({
  username: 'jlindberg',
  balance: 1000
})
console.log('save using setItemSync');
storage.setItemSync('accounts', bankAccounts)

console.log(storage.getItemSync('accounts'));
