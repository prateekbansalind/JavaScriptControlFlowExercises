// average = 70
// 1-59 : F
// 60-69 : D
// 70 -79: C
// 80-89: B
// 90-100: A

const marks = [90, 90, 90, 70];

console.log(calculateGrade(marks));

function calculateGrade(marks){
    const avg = calculateAverage(marks);
    if (avg > 89) return 'A';
    if (avg > 79) return  'B';
    if (avg > 69) return  'C';
    if (avg > 59) return  'D';
    return 'F';
}

function calculateAverage(array){
    let sum = 0;
    for (let value of array)
    sum += value;
    return (sum)/array.length;
}