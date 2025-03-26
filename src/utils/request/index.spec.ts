import type { Mock } from 'vitest';

import mockFetchJsonp from 'fetch-jsonp'

import request from './index'

vi.mock('fetch-jsonp', () => ({
  default: vi.fn(() => Promise.resolve({ json: vi.fn() }))
}))

describe('Utils / request / index', () => {
  it('Sends the formatted request to the library', () => {
    request('endpoint', { key: 'value' })

    expect(mockFetchJsonp).toHaveBeenCalled()
    expect((mockFetchJsonp as Mock).mock.calls[0][0]).toContain('/endpoint?')
    expect((mockFetchJsonp as Mock).mock.calls[0][0]).toContain('&key=value')
  })
})
