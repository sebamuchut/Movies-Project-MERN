const { Schema, model } = require('mongoose');

const Movieschema = new Schema({
    Title: {
        type: String,
        required: true
    },
    Year: {
        type: Number,
        required: true
    },
    Rated: {
        type: String,
    },
    Runtime: {
        type: String
    },
    Genre: {
        type: String,
        required: true
    },
    Director: {
        type: String
    },
    Writer: {
        type: String
    },
    Actors: {
        type: String
    },
    Plot: {
        type: String,
        required: true
    },
    Language: {
        type: String
    },
    Country: {
        type: String
    },
    Poster: {
        type: String
    },
    Ratings: {
        type: Number
    },
    Type: {
        type: String,
        ref: "Type",
        required: true
    }    
});

module.exports = model('Movie', Movieschema);