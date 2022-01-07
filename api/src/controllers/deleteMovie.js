const Movie = require('../models/movie');

module.exports = {
    deleteMovie: async (req, res, next) => {
        const id = req.params.id
        try {
            const deletedMovie = await Movie.findByIdAndDelete({_id: id});
            return res.json(deletedMovie)
        } catch (error) {
            console.log(error)
            res.status(400).send(error)
        }
    }
}