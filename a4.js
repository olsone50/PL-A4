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

    return fp.reduceRight(function (x, a) {
        if (pred(x)) return fp.cons(x, a);
        else return a; },
        lst,
        []);

};


var map = function (f,lst)
{

    return fp.reduceRight(function (x, a) { return fp.cons(f(x), a); },
        lst,
        []);
    
};

var flatten = function (lsts)
{
    return fp.reduceRight(function(list, acc) {
        return fp.reduceRight(fp.cons, list, acc);
    }, lsts, []);
};

var compose = function (lst)
{

    return fp.reduceRight(function (x, a) { return fp.compose(x, a); },
        lst,
        function (x) { return x; });
    
};

var maxOfMins = function (lsts)
{
    var mapper =
        1; /* delete and replace this line */   

    var reducer = function (x, y) {
        if (fp.isGT(x, y))
            return x;
        else
            return y;
    }

    return fp.reduce(
        reducer,       
        fp.map(mapper, lsts),       
        fp.hd(fp.hd(lsts))
    );
};

exports.filter = filter;
exports.map = map;
exports.flatten = flatten;
exports.compose = compose;
exports.maxOfMins = maxOfMins;
