var argv = require('yargs').argv;
console.log(argv);

if (argv.name === 'Neo') {
  console.log('Do you wanna take a pill?');
} else console.log('Hello World');
