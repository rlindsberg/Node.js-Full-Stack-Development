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
  .command('get-pass', 'Get password from node-persist', function(yargs){
    yargs.options({
      username: {
        demand: true,
        alias: 'u',
        description: 'Enter your username or email address used to log in the website'
      }
    });
  })
  .help('help')
  .argv;
var command = argv._[0];

console.log('argv is: ');
console.log(argv);
console.log('The command got from user is ' + command);

// save credentials from command line to database
if (command === 'save-pass') {
  var accountManager = storage.getItemSync('accounts');
  var accountArray = {'website': argv.website, 'username': argv.username, 'password': argv.password}
  console.log('The credentials I got is ' + accountArray);
  console.log('Pushing to accountArray..');
  //push new password to array
  accountManager.push(accountArray)
  console.log('Saving to node-persist..');
  //save new password to storage
  storage.setItemSync('accounts', accountManager)
}

// get credentials from database to command line
if (command === 'get-pass') {
  var accountManager = storage.getItemSync('accounts');
  var matchedAccount;
  for (var i = 0; i < accountManager.length; i++) {
    if (accountManager[i].username === argv.username) {
      matchedAccount = accountManager[i];
    }
  }

  if (typeof matchedAccount === 'undefined') {
    console.log(argv.username + " doesn't exist");
  } else {
    console.log('Account get: ');
    console.log(matchedAccount);
  }

}
