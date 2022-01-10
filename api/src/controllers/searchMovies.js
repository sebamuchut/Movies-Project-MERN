const axios = require('axios');
const moviesDatabase = require('../models/movie');

module.exports = {
    searchAll: async (req, res, next) => {
        const name = req.query.name
        const regex = new RegExp(`${name}+`, "i")
        const type = req.query.type || '';
        const year = req.query.year || '';
        try {
            const movies = await axios.get(process.env.API_URL + '?s=' + `${name}` + process.env.API_KEY + `&type=${type}` + `&y=${year}`);
            let query = { Title: { $regex: regex } }
            if(type && year){
                query = { ...query, Type: type, Year: year}
            }else if(type && !year){
                query = { ...query, Type: type }
            }else if(year && !type){
                query = { ...query, Year: year }
            }
            const moviesDB = await moviesDatabase.find(query);
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