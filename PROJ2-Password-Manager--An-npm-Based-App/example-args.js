var argv = require('yargs')
  .command('hello', 'Greets the user', function(yargs){
    yargs.options({
      name: {
        demand: true,
        alias: 'n' //alias for --name
      }
    }); //.options takes an object as parameter
  }) //command, description, function
  .argv; //chaining

var command = argv._[0];
console.log(argv);

if (argv.name === 'Neo') {
  console.log('Do you wanna take a pill?');
} else console.log('Hello World');
