// Centralized error handling middleware for Express
function errorHandler(err, req, res, next) {
  // Log the error for debugging
  console.error(err)

  // Set status code (default to 500 if not set)
  const status = err.status || 500
  res.status(status).json({
    error: err.message || 'Internal Server Error'
  })
}

module.exports = errorHandler
