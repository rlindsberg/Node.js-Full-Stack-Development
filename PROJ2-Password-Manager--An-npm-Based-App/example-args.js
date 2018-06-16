var argv = require('yargs')
  .command('hello', 'Greets the user', function(yargs){
    yargs.options({
      name: {
        demand: true,
        alias: 'n', //alias for --name
        description: 'Your first name goes here'
      },
      lastName: {
        demand: true,
        description: 'Your last name goes here'
      }
    }); //.options takes an object as parameter
  }) //command, description, function
  .help('help')
  .argv; //chaining

var command = argv._[0];
console.log(argv);

if (argv.name === 'Neo') {
  console.log('Do you wanna take a pill?');
} else console.log('Hello World');
