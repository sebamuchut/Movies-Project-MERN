const axios = require('axios');
const moviesDatabase = require('../models/movie');

module.exports = {
    searchAll: async (req, res, next) => {
        const name = req.params.name
        const regex = new RegExp(`${name}+`, "i")
        const type = req.query.type || ''
        try {
            const movies = await axios.get(process.env.API_URL_SEARCH + `${name}` + process.env.API_KEY + '&type=' + `${type}`);
            const moviesDB = await moviesDatabase.find({ name: { $regex: regex }, type: type });
            const result = moviesDB.concat(movies.data)
            return res.json(result) 
        } catch (error) {
            console.log(error)
        }
    }
}