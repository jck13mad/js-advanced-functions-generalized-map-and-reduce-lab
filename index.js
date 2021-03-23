// Add your functions here
function map(sourceArray, callBackFn) {
    const newArray = [];
    for (let i = 0; i < sourceArray.length; i++) {
        newArray.push(callBackFn(sourceArray[i]))
    }
    return newArray;
}

function reduce(sourceArray, callBackFn, startPoint) {
    let total = 0;
    let i = 0;

    if (startPoint) {
        total = startPoint;
    } else {
        total = sourceArray[0];
        i++;
    }

    for (i; i < sourceArray.length; i++) {
        total = callBackFn(sourceArray[i], total)
    }
    return total;
}