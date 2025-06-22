const dotenv = require('dotenv')
const express = require("express")
const authRoutes = require('./routes/authRoutes.js')
const movieRoutes = require('./routes/movieRoutes.js')
const showRoutes = require('./routes/showRoutes.js')
const cors = require('cors')
const errorHandler = require('./middleware/error.js')

dotenv.config()

const app = express()
app.use(cors()) // Enable CORS for all routes
app.use(express.json()) // to parse JSON bodies

// Use route prefixes for organization
app.use('/api/auth', authRoutes)
app.use('/api/movies', movieRoutes)
app.use('/api/shows', showRoutes)

// Optional: 404 handler for undefined routes
app.use((req, res, next) => {
  res.status(404).json({ message: 'Not Found' })
})

app.use(errorHandler)

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})