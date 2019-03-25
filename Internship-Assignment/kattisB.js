var sample = "AGCT";
var long = "AGCTAGCT"

// var sample = "AAA";
// var long = "AAAAAAAAAA"
var res = 0;
// console.log(matchSample(sample, long, long.length));
// console.log(matchReducedString(sample, long, long.length));
matchAddedString(sample, long, long.length);
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
    for (var i = 0; i < sample.length; i++) {
        //throw away one char from sample
        var slicedSample = sample.replace(sample[i], '');
        matchSample(slicedSample, long, l_index);
    }
    return res;
}

//type 3
function matchAddedString(sample, long, l_index) {
    var nucleobase = ["A", "C", "G", "T"];
    var res = [];
    var res_index = 0;
    for (var i = 0; i < sample.length; i++) {
        for (var j = 0; j < 4; j++) {
            var newString = sample.slice(0, i) + nucleobase[j] + sample.slice(i);
            for (var k = 0; k < res.length; k++) {
                if (res[k] == newString) {
                    break;
                }
            }
            res[res_index] = newString;
            res_index++;
        }
    }
    // sample.slice(0, 1) + "bar" + txt1.slice(1);
    console.log("array:");
    for (var i = 0; i < res.length; i++) {
        console.log(res[i]);
    }
}






























//eof
