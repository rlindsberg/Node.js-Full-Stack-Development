console.log('Starting application');

//include third party modules using require
var storage = require('node-persist');
storage.initSync();

storage.setItemSync('name', 'Andre');
console.log(storage.getItemSync('name'));
