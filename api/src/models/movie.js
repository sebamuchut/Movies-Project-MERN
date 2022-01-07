const { Schema, model } = require('mongoose');

const Movieschema = new Schema({
    title: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    rated: {
        type: String,
    },
    runtime: {
        type: String
    },
    genre: {
        type: String,
        required: true
    },
    director: {
        type: String
    },
    writer: {
        type: String
    },
    actors: {
        type: String
    },
    plot: {
        type: String,
        required: true
    },
    language: {
        type: String
    },
    country: {
        type: String
    },
    poster: {
        type: String
    },
    ratings: {
        type: Number
    },
    type: {
        type: String,
        ref: "Type",
        required: true
    }    
});

module.exports = model('Movie', Movieschema);