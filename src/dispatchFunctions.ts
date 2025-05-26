import vscode from 'vscode'
import { convertCurrency, convertToDebitCreditKey, convertToNumber } from './utils/utils'

export function getDispatchFunction(functionName: string) {
  const functionToDispatch = functionDispatch[functionName]

  if (!functionToDispatch) {
    return (word: string) => word
  }

  return functionToDispatch
}

function transformDate(date: string) {
  const year = `20${date.slice(0, 2)}` // Norma43 year are just the last two digits so we add 20XX. Expires in 2100.
  const month = date.slice(2, 4)
  const day = date.slice(4, 6)

  const formattedDate = `${year}-${month}-${day}`

  return new Date(formattedDate).toLocaleDateString(vscode.env.language, {
    dateStyle: 'full',
  })
}

function transformDebitCreditKey(debitCreditKey: string) {
  return convertToDebitCreditKey(debitCreditKey)
}

function transformCurrencyKey(currencyKey: string) {
  return convertCurrency(currencyKey) || currencyKey
}

function transformAmount(amount: string, debitCreditKey: string) {
  const amountValue = convertToNumber(amount)
  const debitCredit = convertToDebitCreditKey(debitCreditKey)

  const value = debitCredit === 'Debit' ? amountValue : -amountValue

  return value.toLocaleString(vscode.env.language)
}

const functionDispatch: Record<string, (...args: string[]) => string> = {
  transformDate,
  transformDebitCreditKey,
  transformCurrencyKey,
  transformAmount,
}
