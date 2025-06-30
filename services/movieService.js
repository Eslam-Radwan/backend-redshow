const axios = require("axios")
const dotenv = require('dotenv')

dotenv.config()

const API_BASE_URL = process.env.API_BASE_URL
const API_KEY = process.env.API_KEY

const fecthNumberOfPages = async (domain, page) => {
    
    const response = await axios.get(`${API_BASE_URL}/movie/${domain}?page=${page}`, {
        headers: { 'Authorization': `Bearer ${API_KEY}` }
    })
    return response.data;
}

const getPopularMovies = async (count = 20) => {
    const retObj = {}
    retObj.count = count;
    retObj.results = []

    for (let i = 1; i <= Math.ceil(count / 20.0); i++) {

        retObj.results = retObj.results.concat((await fecthNumberOfPages('popular', i)).results)
    }
    retObj.results = retObj.results.slice(0,count)
    return retObj;
}
const getTopRatedMovies = async (count = 20) => {
    const retObj = {}   
    retObj.count = count;
    retObj.results = []

    for (let i = 1; i <= Math.ceil(count / 20.0); i++) {

        retObj.results = retObj.results.concat((await fecthNumberOfPages('top_rated', i)).results)
    }
    retObj.results = retObj.results.slice(0,count)
    return retObj;
}

const getMovieDetail = async (id) => {
    const response = await axios.get(`${API_BASE_URL}/movie/${id}`, {
        headers: { 'Authorization': `Bearer ${API_KEY}` }
    })
    return response.data;
}

const getMovies = async (query) => {
    const respone = await axios.get(`${API_BASE_URL}/discover/movie`,{params:query, headers:{'Authorization': `Bearer ${API_KEY}`}})
    return respone.data;
}


const getMoviesGenres = async () => {
    const respone = await axios.get(`${API_BASE_URL}/genre/movie/list`,{ headers:{'Authorization': `Bearer ${API_KEY}`}})
    return respone.data;

}
module.exports = { getPopularMovies, getTopRatedMovies, getMovieDetail, getMovies, getMoviesGenres}