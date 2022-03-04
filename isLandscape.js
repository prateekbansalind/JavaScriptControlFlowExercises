// isLandscape is a function which takes two argument width and length
// this function gives a boolean output as result
// if width is greater than length then the output is true.

function isLandscape(width, length){
    return (width > length);
}

let result = isLandscape(1000, 500);
console.log(result);