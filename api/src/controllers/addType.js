const Type = require('../models/types')

module.exports = {
    addTypeToDb : async (req, res) => {
        const type = new Type(req.body)
        try {
            const typeAdded = await type.save()
            res.json(typeAdded)
        } catch (error) {
            console.log(error)
            res.send(error)
        }
    }
}