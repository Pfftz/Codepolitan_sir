const mongoose = require("mongoose");

mongoose
    .connect("mongodb://127.0.0.1:27017/movie_db")
    .then(() => {
        console.log("Connected to DB");
    })
    .catch((err) => {
        console.log(err);
    });

const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    genre: String,
    director: String,
    rating: Number,
    cast: [String],
    description: String,
    image: String,
});

const Movie = mongoose.model("Movie", movieSchema);

// Uncomment to use

// Find one movie
/*
Movie.findOne({ year: { $gte: 2018 }, genre: 'Action' })
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    });
*/

// Update multiple movies
/*
Movie.updateMany({ year: { $lt: 2019 } }, { rating: 8 })
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    });
*/

// Update a movie by ID
/*
Movie.findByIdAndUpdate("6674fc48e25385fbfc68a0ad", { rating: 9 })
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    });
*/

// Delete movies with a specific title
/*
Movie.deleteMany({ title: "The Dark Knight" }) // Fixed typo from 'tittle' to 'title'
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    });
*/

// Delete a movie by ID

Movie.findByIdAndDelete("6674fc48e25385fbfc68a0ac")
    .then((result) => {
        console.log(result);
    })
    .catch((err) => {
        console.log(err);
    });

// Insert multiple movies
/*
Movie.insertMany([
    {
        "title": "Black Panther",
        "genre": "Action",
        "director": "Ryan Coogler",
        "year": 2018,
        "cast": ["Chadwick Boseman", "Michael B. Jordan", "Lupita Nyong'o"],
        "description": "T'Challa, the King of Wakanda, rises to the throne in the isolated, technologically advanced African nation, but his claim is challenged by a vengeful outsider who was a childhood victim of T'Challa's father's mistake.",
        "rating": 7.3,
        "image": "https://www.example.com/black_panther.jpg"
    },
    {
        "title": "Avengers: Infinity War",
        "genre": "Action",
        "director": "Anthony Russo, Joe Russo",
        "year": 2018,
        "cast": ["Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"],
        "description": "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
        "rating": 8.4,
        "image": "https://www.example.com/avengers_infinity_war.jpg"
    },
    // Add more movies as needed
]).then((result) => {
    console.log('Items inserted!');
}).catch((err) => {
    console.log(err);
});
*/

// Create a new movie instance
/*
const movie = new Movie({
    title: "The Dark Knight", // Fixed typo from 'tittle' to 'title'
    year: 2008,
    rating: 9,
    director: "Christopher Nolan",
});

movie.save().then(() => console.log(movie)).catch((err) => console.log(err));
*/
