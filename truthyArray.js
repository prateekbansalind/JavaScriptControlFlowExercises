// Falsy
// undefined
// null
// ''
// false
// 0
// Nan

let array = ['', false, true, NaN, undefined, 1, 2, 4];
// let arrayLength = array.length;
// console.log(arrayLength);

function countTruthy(array){
   let count = 0;
   for (let value of array)
    if (value)
        count++;
   return count;
}

console.log(countTruthy(array));