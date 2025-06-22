const axios = require("axios")
const dotenv = require('dotenv')

dotenv.config()

const API_BASE_URL = process.env.API_BASE_URL
const API_KEY = process.env.API_KEY

const getPopularShows = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/tv/popular`, {
            headers: { 'Authorization': `Bearer ${API_KEY}` }
        })
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.status_message || error.message)
    }
}

const getTopRatedShows = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/tv/top_rated`, {
            headers: { 'Authorization': `Bearer ${API_KEY}` }
        })
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.status_message || error.message)
    }
}

const getShowDetail = async (id) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/tv/${id}`, {
            headers: { 'Authorization': `Bearer ${API_KEY}` }
        })
        return response.data;
    } catch (error) {
        throw new Error(error.response?.data?.status_message || error.message)
    }
}

module.exports = { getPopularShows, getTopRatedShows, getShowDetail }