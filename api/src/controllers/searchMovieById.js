const axios = require('axios');

module.exports = {
    searchById: async (req, res, next) => {
        const id = req.params.id
        try {
            const movies = await axios.get(process.env.API_URL + '?i=' + `${id}` + process.env.API_KEY)
            return res.json(movies.data)
        } catch (error) {
            console.log(error)
        }
    }
}