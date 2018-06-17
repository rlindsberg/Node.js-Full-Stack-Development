console.log('Starting application');

//include third party modules using require
var storage = require('node-persist');
storage.initSync();

var argv = require('yargs')
  .command('save-pass', 'Save password to node-persist', function(yargs){
    yargs.options({
      website: {
        demand: true,
        alias: 'w',
        description: 'Enter the website here, without http/https'
      },
      username: {
        demand: true,
        alias: 'u',
        description: 'Enter your username or email address used to log in the website'
      },
      password: {
        demand: true,
        alias: 'p',
        description: 'Enter your password to the website'
      }
    });
  })
  .help('help')
  .argv;
var command = argv._[0];

console.log('argv is ' + argv);
console.log('The command got from user is ' + command);

if (command === 'save-pass') {
  var accountManager = storage.getItemSync('accounts');
  var accountArray = {'website': argv.website, 'username': argv.username, 'password': argv.password}
  console.log(accountArray);
}
function savePassword(accountArray){

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

// savePassword({
//   website:"Twitter",
//   username:"rlind",
//   password:"HelloWorld"
// });

// console.log(getPassword('rlind'));
