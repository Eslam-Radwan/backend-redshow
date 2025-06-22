const { getPopularMovies, getTopRatedMovies, getMovieDetail } = require('../services/movieService.js')

const getPopularMoviesController = async (req, res, next) => {
    try {
        const movies = await getPopularMovies()
        res.status(200).json(movies)
    } catch (error) {
        next(error)
    }
}

const getTopRatedMoviesController = async (req, res, next) => {
    try {
        const movies = await getTopRatedMovies()
        res.status(200).json(movies)
    } catch (error) {
        next(error)
    }
}

const getMovieDetailController = async (req, res, next) => {
    try {
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