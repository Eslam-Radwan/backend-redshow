const  { getPopularShows, getTopRatedShows, getShowDetail } = require('../../services/showsService.js')

describe('showsService', () => {
  it('should fetch popular shows', async () => {
    const data = await getPopularShows()
    expect(data).toHaveProperty('results')
    expect(Array.isArray(data.results)).toBe(true)
  })

  it('should fetch top rated shows', async () => {
    const data = await getTopRatedShows()
    expect(data).toHaveProperty('results')
    expect(Array.isArray(data.results)).toBe(true)
  })

  it('should fetch show details by id', async () => {
    // Use a known show id for testing, e.g. 1399 (Game of Thrones)
    const data = await getShowDetail(1399)
    expect(data).toHaveProperty('id', 1399)
    expect(data).toHaveProperty('name')
  })
})
