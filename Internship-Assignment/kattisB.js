// var sample = "ABC";
// var long = "ABCZAFDABABCFABC"
var sample = "AAA";
var long = "AAAAAAA"
var res = 0;
console.log(matchSample(sample, long, long.length));

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
