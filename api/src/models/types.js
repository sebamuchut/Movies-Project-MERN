const { Schema, model } = require('mongoose');

const schema = new Schema({
    Name: {
        type: String,
        required: true,
        unique: true,
        ref: 'Movie'
    },
    Movies: [
        {
            type: Schema.Types.ObjectId,
            ref: "Movie"
        }
    ]
});

module.exports = model('Type', schema);