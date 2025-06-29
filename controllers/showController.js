const { getPopularShows, getTopRatedShows, getShowDetail } = require('../services/showsService.js')

const getPopularShowsController = async (req, res, next) => {
    try {
        const count = parseInt(req.query.count, 10) || 20
        const shows = await getPopularShows(count)
        res.status(200).json(shows)
    } catch (error) {
        next(error)
    }
}

const getTopRatedShowsController = async (req, res, next) => {
    try {
        const count = parseInt(req.query.count, 10) || 20
        const shows = await getTopRatedShows(count)
        res.status(200).json(shows)
    } catch (error) {
        next(error)
    }
}

const getShowDetailController = async (req, res, next) => {
    try {
        const show = await getShowDetail(req.params.id)
        res.status(200).json(show)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getPopularShows: getPopularShowsController,
    getTopRatedShows: getTopRatedShowsController,
    getShowsDetial: getShowDetailController
}