const express = require('express')
const { getPopularMoviesController, getTopRatedMoviesController, getMovieDetailController, getMoviesController } = require('../controllers/movieController.js')

const router = express.Router()

// GET /api/movies/popular
router.get('/popular', getPopularMoviesController)
// GET /api/movies/toprated
router.get('/top_rated', getTopRatedMoviesController)
// GET /api/movies/:id
router.get('/:id', getMovieDetailController)

router.get('/discover', getMoviesController)

module.exports = router
