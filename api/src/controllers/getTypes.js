const Types = require('../models/types')

module.exports = {
    getTypes: async (req, res, next) => {
        try {
            const typesDB = await Types.find()
            return res.json(typesDB)
        } catch (error) {
            console.log(error)
        }
    }
}