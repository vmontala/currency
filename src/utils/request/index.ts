// Very simple fetch abstraction, including response pre-formatting

import fetchJsonp from 'fetch-jsonp'

import type QueryParams from '@/types/QueryParams'

import getQuery from './getQuery'

export default function request (endpoint: string, params: QueryParams = {}) {
  const url = `${import.meta.env.VITE_API_URL}${endpoint}?access_key=${import.meta.env.VITE_API_KEY}${getQuery(params)}`

  return fetchJsonp(url).then((response) => response.json())
}
