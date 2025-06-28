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

const getPopularMovies = async (count = 20) => {
    const retObj = {}
    retObj.count = count;
    retObj.results = []

    for (let i = 1; i <= Math.ceil(count / 20.0); i++) {

        retObj.results.push((await fecthNumberOfPages('popular', i)).results)
    }
    retObj.results.slice(0,count)
    return retObj;
}
const getTopRatedMovies = async (count = 20) => {
    const retObj = {}
    retObj.count = count;
    retObj.results = []

    for (let i = 1; i <= Math.ceil(count / 20.0); i++) {

        retObj.results.push((await fecthNumberOfPages('top_rated', i)).results)
    }
    retObj.results.slice(0,count)
    return retObj;
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