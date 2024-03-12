var fp = require('./fp');

/****************************************************************

   Your names:  Ethan Lenz
                Evan Olson
                Aidan Trusky

 ****************************************************************/

if ( ! exports ) {
   var exports = [ ];
}

var filter = function (pred,lst)
{

    return fp.reduce(function (a, x) {
        if (pred(x)) return fp.cons(fp.hd(lst), a);
        else return a },
        lst,
        []);

};


var map = function (f,lst)
{

    return fp.reduce(function (a, x) {return fp.cons(f(x), a) }, lst, []);
    
};

var flatten = function (lsts)
{

    /* to be completed */
    
};

var compose = function (lst)
{

    /* to be completed */
    
};

var maxOfMins = function (lsts)
{
    var mapper =
        1; /* delete and replace this line */   

    var reducer =
        2; /* delete and replace this line */

    return fp.reduce(
        3 /* delete and replace this line */
        ,       
        4 /* delete and replace this line */
        ,       
        5 /* delete and replace this line */
    );
};

exports.filter = filter;
exports.map = map;
exports.flatten = flatten;
exports.compose = compose;
exports.maxOfMins = maxOfMins;
