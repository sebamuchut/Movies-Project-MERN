const axios = require('axios');
const moviesDatabase = require('../models/movie');

module.exports = {
    searchById: async (req, res, next) => {
        const id = req.params.id
        try {
            console.log('searching ID in API...')
            let movies = await axios.get(process.env.API_URL + '?i=' + `${id}` + process.env.API_KEY)
            if (movies.data.Response === 'False') {
                console.log('searching ID in database...');
                movies = await moviesDatabase.findById(id)
                return res.json(movies)
            }
            return res.json(movies.data)
        } catch (error) {
            console.log('ERROR: ', error)
        }
    }
}