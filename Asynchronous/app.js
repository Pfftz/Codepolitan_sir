// setTimeout(function () {
//     document.body.style.backgroundColor = 'red';
//     setTimeout(function () {
//         document.body.style.backgroundColor = 'green';
//         setTimeout(function () {
//             document.body.style.backgroundColor = 'blue';
//             setTimeout(function () {
//                 document.body.style.backgroundColor = 'yellow';
//                 setTimeout(function () {
//                     document.body.style.backgroundColor = 'white';
//                 }, 5000);
//             }, 4000);
//         }, 3000);
//     }, 2000);
// }, 1000);

searchMoviesApi('naruto', function (movies) {
    saveToMyDB(movies, function () {
        //if it works, run this:
        filteringMovies(movies, () => {

        });
    }, () => {
        //if it doesn't work, run this:

    });
}, () => {
    //if API is down, or request failed
    
});   