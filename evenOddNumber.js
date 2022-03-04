showNumbers(10);

function showNumbers(limit){
    for (let i = 0; i <= limit; i++){
        let message = (i % 2 == 0) ? 'EVEN' : 'ODD';
        console.log(i, message);
    }
}