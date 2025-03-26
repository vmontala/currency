import { ref } from 'vue'
import { defineStore } from 'pinia'

import session from '@/utils/storage/session'
import request from '@/utils/request'

interface UnformattedCurrencies {
  [key: string]: string,
}

const formatCurrencies = (currencies: UnformattedCurrencies) => Object.entries(currencies).map(
  ([code, name]) => ({
    code,
    name,
  })
)

export default defineStore('currencies', () => {
  const currencies = ref(session.get('currencies') || []);

  const fetchCurrencies = async () => {
    if (currencies.value.length) {
      return Promise.resolve()
    }

    try {
      const response = await request('symbols')

      currencies.value = formatCurrencies(response.symbols)

      // Caches the formatted data so an extra request can be avoidad on next application bootstrap
      session.set('currencies', currencies.value)
    } catch (error) {
      window.alert('Error loading the currencies')

      console.error(error)
    }
  }

  return {
    currencies,
    fetchCurrencies,
  }
})
