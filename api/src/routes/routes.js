const express = require('express');
const { addTypeToDb } = require('../controllers/addType');
const { createMovie } = require('../controllers/createMovie');
const { getTypes } = require('../controllers/getTypes');
const { searchById } = require('../controllers/searchMovieById');
const { searchAll } = require('../controllers/searchMovies');
const router = express.Router();

router
    .get('/search/:name', searchAll)
    .get('/search/id/:id', searchById)
    .get('/types', getTypes)

    .post('/create', createMovie)

    .post('/addtype', addTypeToDb)



module.exports = router;