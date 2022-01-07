const { Schema, model } = require('mongoose');

const schema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        ref: 'Movie'
    },
    movies: [
        {
            type: Schema.Types.ObjectId,
            ref: "Movie"
        }
    ]
});

module.exports = model('Type', schema);