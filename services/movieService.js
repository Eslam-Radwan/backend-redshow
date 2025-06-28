const axios = require("axios")
const dotenv = require('dotenv')

dotenv.config()

const API_BASE_URL = process.env.API_BASE_URL
const API_KEY = process.env.API_KEY

const fecthNumberOfPages = async (domain, page) => {

     try {
        
        const response = await axios.get(`${API_BASE_URL}/movie/${domain}?page=${page}`, {
            headers: { 'Authorization': `Bearer ${API_KEY}` }
        })
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.status_message || error.message)
    }
}

const getPopularMovies = async (count) => {
    const arr = []

    for (let i = 1; i <= Math.ceil(count / 20.0);i++)
    {
        arr.push(fecthNumberOfPages('popular', i))
    }
    return arr;
}
const getTopRatedMovies = async (count) => {
    const arr = []

    for (let i = 1; i <= Math.ceil(count / 20.0);i++)
    {
        arr.push(fecthNumberOfPages('top_rated', i))
    }
    return arr;
}

const getMovieDetail = async (count, id) => {
     const arr = []

    for (let i = 1; i <= Math.ceil(count / 20.0);i++)
    {
        arr.push(fecthNumberOfPages(id, i))
    }
    return arr;
}

module.exports = { getPopularMovies, getTopRatedMovies, getMovieDetail }