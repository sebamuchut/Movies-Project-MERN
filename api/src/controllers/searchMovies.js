const axios = require('axios');
const moviesDatabase = require('../models/movie');

module.exports = {
    searchAll: async (req, res, next) => {
        const name = req.query.name
        const regex = new RegExp(`${name}+`, "i")
        const type = req.query.type || '';
        const page = req.query.page || '';
        try {
            const movies = await axios.get(process.env.API_URL + '?s=' + `${name}` + process.env.API_KEY + `&type=${type}` + `&page=${page}`);
            const moviesDB = await moviesDatabase.find({ title: { $regex: regex } });
            let result
            if(movies.data.Search){
                result = moviesDB.concat(movies.data.Search)
            } else {
                result = moviesDB
            }
            return res.json(result) 
        } catch (error) {
            console.log(error)
        }
    }
}