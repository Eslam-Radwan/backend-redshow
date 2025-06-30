const { 
    getPopularMovies, 
    getTopRatedMovies, 
    getMovieDetail, 
    getMovies, 
    getMoviesGenres 
  } = require('../../services/movieService.js')

  describe('movieService', () => {
    it('should fetch popular movies', async () => {
      const data = await getPopularMovies()
      expect(data).toHaveProperty('results')
      expect(Array.isArray(data.results)).toBe(true)
      expect(data.results).not.toBeNull()
    })

    it('should fetch top rated movies', async () => {
      const data = await getTopRatedMovies()
      expect(data).toHaveProperty('results')
      expect(Array.isArray(data.results)).toBe(true)
      expect(data.results).not.toBeNull()
    })

    it('should fetch movie details by id', async () => {
      // Use a known movie id for testing, e.g. 550 (Fight Club)
      const data = await getMovieDetail(550)
      expect(data).toHaveProperty('id', 550)
      expect(data).toHaveProperty('title')
      expect(data).not.toBeNull()
    })

    it('should fetch movies with query', async () => {
      const data = await getMovies({ sort_by: 'popularity.desc', page: 1 })
      expect(data).toHaveProperty('results')
      expect(Array.isArray(data.results)).toBe(true)
      expect(data.results).not.toBeNull()
    })

    it('should fetch movie genres', async () => {
      const data = await getMoviesGenres()
      expect(data).toHaveProperty('genres')
      expect(Array.isArray(data.genres)).toBe(true)
      expect(data.genres).not.toBeNull()
    })
  })
