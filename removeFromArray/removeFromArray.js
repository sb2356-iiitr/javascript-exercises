const removeFromArray = function(...a) {
    const ar = a[0];
    for (let i = 1; i < a.length; i++) {
        if (typeof(a[i] == "number")) {
            for (let j = 0; j < ar.length; j++) {
                if(ar[j] === a[i])
                {
                    ar.splice(j, 1);
                }
            }
        }
    }
    return ar;
}

module.exports = removeFromArray
