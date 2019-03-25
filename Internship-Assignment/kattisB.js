// var sample = "AGCT";
// var long = "AGCTAGCT"
//
// // var sample = "AAA";
// // var long = "AAAAAAAAAA"

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

    var res = 0
    console.log(matchSample(sample, long, long.length) + " " + matchReducedString(sample, long, long.length) + " " + matchAddedString(sample, long, long.length));


});

var res = 0;
// i should be 0 from caller
function matchSample(sample, long, l_index) {
    if (l_index==0)
        return res;

        if (checkEveryChar(sample, long, l_index)) {
            return res = 1 + matchSample(sample, long, l_index-1)
    }
       else return res =  matchSample(sample, long, l_index-1)

    //nothing found
    console.log(0);

}

function checkEveryChar(sample, long, l_index) {
    for (var i = 0; i < sample.length; i++) {
        if (sample[i] != long[l_index - sample.length + i]) {
            return false;
        }
    }
    return true;
}

//type 2
function matchReducedString(sample, long, l_index) {
    res = 0;
    for (var i = 0; i < sample.length; i++) {
        //throw away one char from sample
        var slicedSample = sample.replace(sample[i], '');
        matchSample(slicedSample, long, l_index);
    }
    return res;
}

//type 3
function matchAddedString(sample, long, l_index) {
    res = 0;
    var nucleobase = ["A", "C", "G", "T"];
    var res_arr = [];
    var res_index = 0;
    for (var i = 0; i <= sample.length; i++) {
        for (var j = 0; j < 4; j++) {
            var newString = sample.slice(0, i) + nucleobase[j] + sample.slice(i);
            //check for duplicate
            for (var k = 0; k < l_index; k++) {
                if (res_arr[k] == newString) {
                    break;
                }
                if (k == l_index - 1) {
                    res_arr[res_index] = newString;
                    res_index++;
                }
            }
        }
    }

    for (var i = 0; i < res_arr.length; i++) {
        matchSample(res_arr[i], long, l_index);
    }
    return res;
}
