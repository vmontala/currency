import getRelative from './getRelative'

describe('Utils / date / getRelative', () => {
  beforeAll(() => {
    vi.useFakeTimers()
  })

  beforeEach(() => {
    vi.restoreAllMocks()

    vi.setSystemTime(new Date('2025-02-01T00:00:00.000000Z'))
  })

  afterAll(() => {
    vi.useRealTimers()
  })

  it('Days', () => {
    expect(getRelative('2025-01-25T00:00:00.000000Z')).toBe('7 days ago')
    expect(getRelative('2025-01-31T00:00:00.000000Z')).toBe('yesterday')
  })

  it('Months', () => {
    expect(getRelative('2024-04-01T00:00:00.000000Z')).toBe('11 months ago')
    expect(getRelative('2025-01-02T00:00:00.000000Z')).toBe('last month')
  })

  it('Years', () => {
    expect(getRelative('2016-02-01T00:00:00.000000Z')).toBe('10 years ago')
    expect(getRelative('2024-02-02T00:00:00.000000Z')).toBe('last year')
  })
})
