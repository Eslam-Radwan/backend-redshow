const express = require('express')
const { getPopularShowsController, getTopRatedShowsController, getShowsController,getShowDetailController } = require('../controllers/showController.js')

const router = express.Router()

// GET /api/shows/popular
router.get('/popular', getPopularShowsController)
// GET /api/shows/toprated
router.get('/top_rated', getTopRatedShowsController)
// GET /api/shows/:id
router.get('/:id', getShowDetailController)

router.get('/discover', getShowsController)
module.exports = router