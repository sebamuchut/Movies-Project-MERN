const Movie = require('../models/movie');
const Type = require('../models/types');

module.exports = {
    deleteMovie: async (req, res, next) => {
        const id = req.params.id
        try {
            const deletedMovie = await Movie.findByIdAndDelete({_id: id});
            if(deletedMovie) {
                const query = { Name: deletedMovie.Type }
                await Type.findOneAndUpdate(
                    query,
                    {$pull: { Movies: deletedMovie._id }}
                ) 
                return res.json({message: 'you deleted a movie', deletedMovie: deletedMovie})
            } else {
                return res.send({message: 'no movies found'})
            }
        } catch (error) {
            console.log(error)
            res.status(400).send(error)
        }
    }
}