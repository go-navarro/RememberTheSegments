function randomInt(minNum, maxNum) {
    if (!Number.isInteger(minNum)) {
        throw "The object numMin is not an integer.";
    } else if (!Number.isInteger(maxNum)) {
        throw "The object numMax is not an integer";
    }
    return minNum + Math.floor(Math.random() * (maxNum - minNum));
}

function randomIntegers(minNum, maxNum, n) {
    return [...Array(n)].map(() => randomInt(minNum, maxNum));
}
