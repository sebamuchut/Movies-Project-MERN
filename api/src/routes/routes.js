const express = require('express');
const { addTypeToDb } = require('../controllers/addType');
const { createMovie } = require('../controllers/createMovie');
const { deleteMovie } = require('../controllers/deleteMovie');
const { getTypes } = require('../controllers/getTypes');
const { searchById } = require('../controllers/searchMovieById');
const { searchAll } = require('../controllers/searchMovies');
const { updateMovie } = require('../controllers/updateMovie');
const router = express.Router();

router
    .get('/search/', searchAll)
    .get('/search/id/:id', searchById)
    .get('/types', getTypes)

    .post('/create', createMovie)
    .post('/addtype', addTypeToDb)

    .delete('/delete/:id', deleteMovie)

    .put('/create/:id', updateMovie)



module.exports = router;