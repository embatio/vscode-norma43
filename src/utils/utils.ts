import vscode from 'vscode'
import currencyCodes from 'currency-codes'
import { Norma43Registry, RegistryPosition } from '../interfaces'

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

export function extractByRegistry(line: string, registry: string, registryPosition: RegistryPosition) {
  if (!registryPosition[registry]) {
    throw new Error(`Registry ${registry} not found`)
  }

  const [start, length] = registryPosition[registry]
  return extractorByPosition(line, start, length)
}

export function getRegistry(character: number, positions: RegistryPosition) {
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

export function convertToNumber(amount: string, numberOfDecimals = 0) {
  if (numberOfDecimals === 0) return Number(amount)

  const integerPart = amount.slice(0, amount.length - numberOfDecimals)
  const decimalPart = amount.slice(amount.length - numberOfDecimals)

  return Number(`${integerPart}.${decimalPart}`)
}

export function generateRange(lineIndex: number, registry: string, registryPosition: RegistryPosition) {
  const [start, length] = registryPosition[registry]
  return new vscode.Range(new vscode.Position(lineIndex, start - 1), new vscode.Position(lineIndex, start + length - 1))
}

export function extractRegistryDescription(
  registry: string,
  registryDefinitions: Norma43Registry[]
): Norma43Registry | undefined {
  return registryDefinitions.find((item) => item.id === registry)
}
