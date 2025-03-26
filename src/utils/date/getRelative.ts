// Decided to use somewhat magic numbers here (i.e. 30 for month), this could be easily improved
// with some proper data maps and more cases

const formatter = new Intl.RelativeTimeFormat('en-NL', { numeric: 'auto' })

const getUnit = (days: number) => {
  if (days < 30) {
    return {
      amount: -days,
      unit: 'day',
    }
  }

  if (days < 365) {
    return {
      amount: Math.floor(-days / 30),
      unit: 'month',
    }
  }

  return {
    amount: Math.floor(-days / 365),
    unit: 'year',
  }
}

// Gets the relative interpretation from a date (i.e. `-1 day` becomes `yesterday`)
const getRelative = (date: string) => {
  const now = +new Date()
  const then = +new Date(date)

  const time = Math.abs(then - now)
  const days = Math.floor(time / (1000 * 60 * 60 * 24))

  const { amount, unit } = getUnit(days)

  return formatter.format(amount, unit as Intl.RelativeTimeFormatUnit)
}

export default getRelative
