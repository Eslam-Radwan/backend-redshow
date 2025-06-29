const express = require('express')
const { getPopularMovies, getTopRatedMovies, getMovieDetail } = require('../controllers/movieController.js')

const router = express.Router()

// GET /api/movies/popular
router.get('/popular', getPopularMovies)
// GET /api/movies/toprated
router.get('/top_rated', getTopRatedMovies)
// GET /api/movies/:id
router.get('/:id', getMovieDetail)

module.exports = router
