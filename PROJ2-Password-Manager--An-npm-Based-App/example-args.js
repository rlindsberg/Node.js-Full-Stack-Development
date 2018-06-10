var argv = require('yargs').argv;
var command = argv._[0];
console.log(argv);

if (argv.name === 'Neo') {
  console.log('Do you wanna take a pill?');
} else console.log('Hello World');
