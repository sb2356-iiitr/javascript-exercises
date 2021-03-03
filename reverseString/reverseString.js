const reverseString = function(str) {
    let s = str.split("");
    let ss = s.reverse();
    return ss.join("");
}

module.exports = reverseString
