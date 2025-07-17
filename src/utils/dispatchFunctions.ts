import vscode from 'vscode'
import { convertCurrency, convertToDebitCreditKey, convertToNumber } from './utils'

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

function transformNumber(number: string) {
  return convertToNumber(number).toString()
}

function transformAmount(amount: string, debitCreditKey?: string) {
  const amountValue = convertToNumber(amount, 2)
  const debitCredit = debitCreditKey ? convertToDebitCreditKey(debitCreditKey) : 'Debit'

  const value = debitCredit === 'Credit' ? amountValue : -amountValue

  return value.toLocaleString(vscode.env.language)
}

function transformPositiveAmount(amount: string) {
  return transformAmount(amount, '2')
}

function transformNegativeAmount(amount: string) {
  return transformAmount(amount, '1')
}

const functionDispatch: Record<string, (...args: string[]) => string> = {
  transformDate,
  transformDebitCreditKey,
  transformCurrencyKey,
  transformAmount,
  transformPositiveAmount,
  transformNegativeAmount,
  transformNumber,
}
