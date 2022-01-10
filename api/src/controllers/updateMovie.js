const Movie = require('../models/movie');

module.exports = {
    updateMovie: async (req, res, next) => {
        const id = req.params.id
        const body = req.body;
        const updateMovie = await Movie.findByIdAndUpdate(
            id,
            body
        )
        res.json(updateMovie)
    }
}