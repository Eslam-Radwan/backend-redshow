const express = require('express')
const { getPopularShows, getTopRatedShows, getShowsDetial } = require('../controllers/showController.js')

const router = express.Router()

// GET /api/shows/popular
router.get('/popular', getPopularShows)
// GET /api/shows/toprated
router.get('/top_rated', getTopRatedShows)
// GET /api/shows/:id
router.get('/:id', getShowsDetial)

module.exports = router