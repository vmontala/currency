import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

import type Conversion from '@/types/Conversion'

import session from '@/utils/storage/session'
import request from '@/utils/request'

const formatter = Intl.NumberFormat('en-NL', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format

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
    id: +(new Date()),
    date: date,
    rate: rate,
    from: {
      currency: from,
      amount: {
        value: amount,
        label: formatter(amount),
      },
    },
    to: {
      currency: to,
      amount: {
        value: convertedAmount,
        label: formatter(convertedAmount),
      },
    },
  }
}

export default defineStore('conversion', () => {
  const conversions = ref(session.get('conversions') || [])
  const latest = computed(() => conversions.value.at(0))
  const history = computed(() => conversions.value.slice(1))

  const fetchConversion = async (from: string, to: string, amount: number) => {
    try {
      const response = await request('latest', { base: from, symbols: [to] })

      return formatConversion({
        from,
        to,
        amount,
        date: response.date,
        rate: response.rates[to],
      });
    } catch (error) {
      window.alert('Error converting the currencies')

      console.error(error)
    }
  }

  const getConversion = async (from: string, to: string, amount: number) => {
    const date = (new Date()).toISOString().split('T')[0]

    const existingConversion = conversions.value.find((conversion: Conversion) => (
      conversion.date === date && conversion.from.currency === from && conversion.to.currency === to
    ))

    if (!existingConversion) {
      return await fetchConversion(from, to, amount)
    }

    return formatConversion({
      from,
      to,
      amount,
      date,
      rate: existingConversion.rate,
    })
  }

  const convert = async (from: string, to: string, amount: number) => {
    const conversion = await getConversion(from, to, amount)

    if (!conversion?.rate) {
      return
    }

    conversions.value = [conversion, ...conversions.value]

    //
    session.set('conversions', conversions.value)
  }

  return {
    latest,
    history,
    convert,
  }
})
