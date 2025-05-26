import currencyCodes from 'currency-codes'

/**
 * Helper function to extract data from a line in a norma43/fb500 file
 *
 * @param line registry line to extract the data
 * @param position starting position
 * @param length length of the data
 *
 */
export function extractorByPosition(line: string, position: number, length: number) {
  return line.slice(position - 1, position + length - 1)
}

export function isInBetween(character: number, positions: Record<string, [number, number]>) {
  for (const key of Object.keys(positions)) {
    const [start, length] = positions[key]
    if (character >= start - 1 && character < start + length - 1) {
      return key
    }
  }

  return undefined
}

/**
 * Convert a currency code to a currency number
 *
 * @param currency currency code in ISO 4217 format
 *
 * @see https://en.wikipedia.org/wiki/ISO_4217
 */
export function convertCurrency(currency: string) {
  if (currency.trim() === '') {
    return undefined
  }

  const currencyCode = currencyCodes.number(currency)?.code

  if (!currencyCode) {
    throw new Error(`Currency ${currency} not found`)
  }

  return currencyCode
}

export function convertToDebitCreditKey(debitCreditKey: string) {
  return debitCreditKey === '1' ? 'Debit' : 'Credit'
}

export function convertToNumber(amount: string, numberOfDecimals = 2) {
  if (numberOfDecimals === 0) return Number(amount)

  const integerPart = amount.slice(0, amount.length - numberOfDecimals)
  const decimalPart = amount.slice(amount.length - numberOfDecimals)

  return Number(`${integerPart}.${decimalPart}`)
}
