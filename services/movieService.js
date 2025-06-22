const axios = require("axios")
const dotenv = require('dotenv')

dotenv.config()

const API_BASE_URL = process.env.API_BASE_URL
const API_KEY = process.env.API_KEY

const getPopularMovies = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/movie/popular`, {
            headers: { 'Authorization': `Bearer ${API_KEY}` }
        })
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.status_message || error.message)
    }
}
const getTopRatedMovies = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/movie/top_rated`, {
            headers: { 'Authorization': `Bearer ${API_KEY}` }
        })
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.status_message || error.message)
    }
}

const getMovieDetail = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/movie/${id}`, {
            headers: { 'Authorization': `Bearer ${API_KEY}` }
        })
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.status_message || error.message)
    }
}

module.exports = { getPopularMovies, getTopRatedMovies, getMovieDetail }