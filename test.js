var fileName = 'a3';
var selectedTest = process.argv[2];
var solution; // student's solution code

/////////////////////// define the test suite /////////////////////////
var tests = [
    /*  0 */ "filter( [1,2,3],3 )",
    /*  1 */ "map( [1,2,3],5 )",
    /*  2 */ "flatten( [[1,2,3],[4,5],[6],[],[7,8,9]] )",
    /*  3 */ "compose(fp.makeList( function (x) { return fp.add(x,3); }, function (x) { return fp.mul(x, x); }, function (x) { return fp.add(x, 2); } )) (3) ",  
    /*  4 */ "maxOfMins( [[1,2,-3],[4,5],[-6],[-7,8,-9]])",
];

////////////////// load the student's solution  //////////////////////
process.stdout.write("\nLoading student code... ");
try {
    solution = require('./' + fileName);
    console.log(" done\n");
} catch (e) {
    console.log("\nError loading the student's solution code from " 
                + fileName + ".js\n");
    process.exit(1);
}

///////////////////////// run the test(s) /////////////////////////////
if (selectedTest) {
    if ( (/^[0-9]+$/.test(selectedTest)) &&
         (Number(selectedTest) < tests.length) ) {
        runTest(selectedTest)
    } else {
        console.log("Error: Test number is invalid or out of range");
       process.exit(1);
    }
} else { 
    console.log("===========================");
    console.log("Test suite for", fileName +".js");
    console.log("===========================");
    for(var i=0; i<tests.length; i++) {
        runTest(i);
    }
}

/////////////// helper function to run one test //////////////////
function runTest(testNumber) {
    var test = tests[testNumber];
    var output;
    var fname = "addIfNew";
    var args = [[1,2,3],4];
    
    var fn = solution[fname];
    try {
        console.log("Test #",testNumber);
        output = eval( "solution." + test );
        console.log( "", test )
        process.stdout.write(" ==> ");
        console.log( JSON.stringify(output) );
    } catch (e) {
        console.log(e.message);
    }
    console.log("----------------------------------------------------");
}
