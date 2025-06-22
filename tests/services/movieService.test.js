const { getPopularMovies, getTopRatedMovies, getMovieDetail } = require('../../services/movieService.js')

describe('movieService', () => {
  it('should fetch popular movies', async () => {
    const data = await getPopularMovies()
    expect(data).toHaveProperty('results')
    expect(Array.isArray(data.results)).toBe(true)
  })

  it('should fetch top rated movies', async () => {
    const data = await getTopRatedMovies()
    expect(data).toHaveProperty('results')
    expect(Array.isArray(data.results)).toBe(true)
  })

  it('should fetch movie details by id', async () => {
    // Use a known movie id for testing, e.g. 550 (Fight Club)
    const data = await getMovieDetail(550)
    expect(data).toHaveProperty('id', 550)
    expect(data).toHaveProperty('title')
  })
})
