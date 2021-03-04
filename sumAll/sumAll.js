const sumAll = function(a, b) {
    if (typeof(a) != "number" || typeof(b) != "number"
        || a < 0 || b < 0) {
        return "ERROR";
    } 
    let m = Math.max(a, b), mi = Math.min(a, b);
    let s = m*(m+1)/2 - (mi-1);
    return s;
}

module.exports = sumAll
