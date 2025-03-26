import getQuery from './getQuery'

describe('Utils / request / getQuery', () => {
  describe('Calls correctly the private request method', () => {
    it('Without params', () => {
      const query = getQuery()

      expect(query).toBe('')
    })

    it('With empty params', () => {
      const query = getQuery({})

      expect(query).toBe('')
    })

    it('With params', () => {
      const query = getQuery({ key: 'value' })

      expect(query).toBe('&key=value')
    })
  })
})
