var sample = "AGCT";
var long = "AGCTAGCT"
//
// var sample = "AAA";
// var long = "AAAAAAAAAA"


console.log(matchSample(sample, long, long.length, 0));
console.log(matchReducedString(sample, long, long.length, 0));
console.log(matchAddedString(sample, long, long.length, 0));

// console.log(matchSample(sample, long, long.length));
// console.log(matchReducedString(sample, long, long.length));
// console.log(matchAddedString(sample, long, long.length));


// res = 0;
// i should be 0 from caller
function matchSample(sample, long, l_index, res) {
    if (l_index==0)
        return res;

        if (checkEveryChar(sample, long, l_index)) {
            return res = matchSample(sample, long, l_index-1, res+1)
    }
       else return res =  matchSample(sample, long, l_index-1, res)

    //nothing found
    // console.log(0);

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
function matchReducedString(sample, long, l_index, res) {
    var res_arr = [];
    var res_index = 0;
    for (var i = 0; i < sample.length; i++) {
        //throw away one char from sample
        var slicedSample = sample.replace(sample[i], '');
        //check for duplicate.
        //fall 1, if empty array
        if (res_arr.length == 0) {
            res_arr[0] = slicedSample;
        }
        //fall 2, not empty
        for (var k = 0; k < res_arr.length; k++) {
            if (res_arr[k] == slicedSample) {
                break;
            }
            if (k == res_arr.length - 1) {
                res_arr[res_arr.length] = slicedSample;
            }
        }
    }
    //call matchSample with all ele in res_arr
    for (var i = 0; i < res_arr.length; i++) {

        res = res + matchSample(res_arr[i], long, l_index, 0);

    }
    return res;
}

//type 3
function matchAddedString(sample, long, l_index, res) {
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
        res = res + matchSample(res_arr[i], long, l_index, 0);
    }
    return res;
}
