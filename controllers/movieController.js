const { getPopularMovies, getTopRatedMovies, getMovieDetail } = require('../services/movieService.js')

const getPopularMoviesController = async (req, res, next) => {
    try {
        const count = parseInt(req.query.count, 10) || 20
        const movies = await getPopularMovies(count)
        res.status(200).json(movies)
    } catch (error) {
        next(error)
    }
}

const getTopRatedMoviesController = async (req, res, next) => {
    try {
        const count = parseInt(req.query.count, 10) || 20
        const movies = await getTopRatedMovies(count)
        res.status(200).json(movies)
    } catch (error) {
        next(error)
    }
}

const getMovieDetailController = async (req, res, next) => {
    try {
        const count = parseInt(req.query.count, 10) || 20
        const movie = await getMovieDetail(req.params.id)
        res.status(200).json(movie)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getPopularMovies: getPopularMoviesController,
    getTopRatedMovies: getTopRatedMoviesController,
    getMovieDetail: getMovieDetailController
}