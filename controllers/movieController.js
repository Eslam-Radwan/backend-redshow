const { getPopularMovies, getTopRatedMovies, getMovieDetail, getMoviesGenres} = require('../services/movieService.js')

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
        const movie = await getMovieDetail(req.params.id)
        res.status(200).json(movie)
    } catch (error) {
        next(error)
    }
}

const getMoviesController = () => {
    try {
        const data = getMovies(req.query)
        res.status(200).json(data)
    }
    catch (error) {
        next(error)
    }
}
const getMoviesGenresController = () => {
    try {
        const data = getMoviesGenres();
        res.status(200).json(data);
    }
    catch (error)
    {
        next(error)
    }
}

module.exports = {
    getPopularMoviesController,
    getTopRatedMoviesController,
    getMovieDetailController,
    getMoviesController,
    getMoviesGenresController
}