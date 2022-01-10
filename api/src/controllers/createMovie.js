const Movie = require('../models/movie');
const Type = require('../models/types');

module.exports = {
    createMovie: async (req, res, next) => {
        const movie = new Movie(req.body)
        try {
            //create the new movie
            const movieCreated = await movie.save()

            //check if type of movie already exists in db
            const query = { Name: req.body.Type }
            await Type.findOneAndUpdate(
                query,
                {$push: { Movies: movieCreated._id } },
                { upsert: true}
                )

            console.log('Succesfully saved')
            res.json({'message': 'Succesfully saved', 'new Movie': movieCreated})
            
        } catch (error) {
            console.log(error)
        }
    }
}