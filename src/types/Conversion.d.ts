interface ConversionPart {
  currency: string,
  amount: {
    value: number,
    label: string,
  },
}

export default interface Conversion {
  id: number,
  date: string,
  rate: number,
  from: ConversionPart,
  to: ConversionPart,
}
