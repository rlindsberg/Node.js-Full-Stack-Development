console.log('Starting application');

//include third party modules using require
var storage = require('node-persist');
storage.initSync();

function savePassword(accountArray){
  var accountManager = storage.getItemSync('accounts');

  //push new password to array
  accountManager.push(accountArray)
  //save new password to storage
  storage.setItemSync('accounts', accountManager)
}

function getPassword(myUsername){
  var accountManager = storage.getItemSync('accounts');
  var matchedAccount;
  for (var i = 0; i < accountManager.length; i++) {
    if (accountManager[i].username === myUsername) {
      matchedAccount = accountManager[i];
    }
  }
  console.log('Account get: ');
  return matchedAccount;
}

savePassword({"website":"Twitter","username":"rlind","password":"HelloWorld"})
console.log(getPassword('rlind'));
