const movie = {
    title : 'a',
    releaseYear: 2018,
    rating: 4.5,
    director: 'b'
};


function showProperties(obj){
    for (let property in obj)
    if (typeof obj[property] === 'string')
    console.log(property, obj[property])
}

showProperties(movie);