import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

import type Conversion from '@/types/Conversion'

import session from '@/utils/storage/session'
import request from '@/utils/request'

const formatter = Intl.NumberFormat('en-NL', { minimumFractionDigits: 2, maximumFractionDigits: 2 })

interface UnformattedConversion {
  date: string,
  rate: number,
  from: string,
  amount: number,
  to: string,
}

const formatConversion = ({ date, rate, from, amount, to }: UnformattedConversion) => {
  const convertedAmount = amount * rate

  return {
    // Ultimately the only way to get a unique key for rendering the history
    id: +(new Date()),
    date: date,
    rate: rate,
    from: {
      currency: from,
      amount: {
        value: amount,
        label: formatter.format(amount),
      },
    },
    to: {
      currency: to,
      amount: {
        value: convertedAmount,
        label: formatter.format(convertedAmount),
      },
    },
  }
}

export default defineStore('conversion', () => {
  const conversions = ref(session.get('conversions') || [])
  const latest = computed(() => conversions.value.at(0))
  const history = computed(() => conversions.value.slice(1))

  // Fetches new conversion rates given the provided currencies
  const fetchRate = async (from: string, to: string) => {
    try {
      const response = await request('latest', { base: from, symbols: [to] })

      return response.rates[to]
    } catch (error) {
      window.alert('Error fetching the rates for those currencies')

      console.error(error)
    }
  }

  // Finds out wheter to use an existing conversion rate for the given parameters or fetch new rates
  // and then converts the currencies
  const getConversion = async (from: string, to: string, amount: number) => {
    const date = (new Date()).toISOString().split('T')[0]

    const existingConversion = conversions.value.find((conversion: Conversion) => (
      conversion.date === date && conversion.from.currency === from && conversion.to.currency === to
    ))

    return formatConversion({
      from,
      to,
      amount,
      date,
      rate: existingConversion?.rate || await fetchRate(from, to),
    })
  }

  // Converts the amount from the selected to the selected currency
  const convert = async (from: string, to: string, amount: number) => {
    const conversion = await getConversion(from, to, amount)

    if (!conversion?.rate) {
      return
    }

    conversions.value = [conversion, ...conversions.value]

    // Caches the conversion list so more requests can be saved, and history remains consistent
    // between application uses
    session.set('conversions', conversions.value)
  }

  return {
    latest,
    history,
    convert,
  }
})
