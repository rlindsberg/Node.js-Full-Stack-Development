var argv = require('yargs')
  .command('hello', 'Greets the user', function(yargs){
    yargs.options({
      name: {
        demand: true
      }
    }); //.options takes an object as parameter
  }) //command, description, function
  .argv; //chaining
