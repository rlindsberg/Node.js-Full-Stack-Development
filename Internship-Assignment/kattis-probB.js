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
    console.log(matchSample(sample, long, 0, 0, 0));
});

// i should be 0 from caller
function matchSample(sample, long, s_index, l_index, matchedPrev) {
    var res = 0;
    for (; l_index < long.length; l_index++) {
        //take a char from sample and loop in long
        //the inner loop quit if no matched char found
        console.log("The value of l_index is " + l_index + "\n");

        if (sample[s_index] == long [l_index]) {
            //found a match
            matchedPrev = 1;
            console.log("Found a matched char: " + sample[s_index] + "\n");

            //return sucess if reached the end of sample
            if (s_index == sample.length - 1) {
                res++;
                s_index = 0;
                console.log("breaking..");
                break;
            }

            //then check the next char
            if (matchSample(sample, long, s_index+1, l_index+1, matchedPrev)) {
                return 1
            } else {
                return 0
            }
        } else if (matchedPrev == 1) {
            console.log("failed, reset s_index");
            s_index = 0;
            matchedPrev = 0;
        } else {
            console.log("nothing found, moving on into the next char in long");
        }
    }
    //nothing found
    console.log(0);

}
