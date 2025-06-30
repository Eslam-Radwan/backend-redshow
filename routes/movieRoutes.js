const express = require('express')
const { getPopularMoviesController, getTopRatedMoviesController, getMovieDetailController, getMoviesController, getMoviesGenresController } = require('../controllers/movieController.js')

const router = express.Router()

router.get('/popular', getPopularMoviesController)
router.get('/top_rated', getTopRatedMoviesController)
router.get('/discover', getMoviesController)
router.get('/genres', getMoviesGenresController)
router.get('/:id', getMovieDetailController)

module.exports = router
