const express = require('express')
const { signup, login } = require('../controllers/authController.js')

const app = express()

app.post('/signup', signup)
app.get('/login', login)

module.exports = app