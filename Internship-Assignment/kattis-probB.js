const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.on('line', (line) => {
    var inputFromConsole = line.split(' ');
    //testing... sample == AGCT
    //and long == AGCTAGCT
    var sample = inputFromConsole[0];
    var long = inputFromConsole[1]
    console.log(sample.length);
    matchSample(sample, long, 0, 0)
});

// i should be 0 from caller
function matchSample(sample, long, s_index, l_index) {
    for (; l_index < long.length; l_index++) {
        //take a char from sample and loop in long
        //the inner loop quit if no matched char found
        console.log("The value of l_index is " + l_index + "\n");
        if (sample[s_index] == long [l_index]) {
            //found a match
            console.log("Found a matched char: " + sample[s_index] + "\n");
            return;
        }
    }

}
