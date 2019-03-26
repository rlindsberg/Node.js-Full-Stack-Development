const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    var nums = line.split(' ');
    var radius = parseInt(nums[0]);
    var crust = parseInt(nums[1]);
    //pi*(radius-crust)^2 is area that has cheese
    var pi = 3
    var cheeseArea = pi * (radius - crust) * (radius - crust)
    var pizzaArea = pi * radius * radius
    //calculate procent
    var res = cheeseArea / pizzaArea * 100
    console.log(res.toPrecision(8));
});
