import { RegistryPosition } from '../interfaces'

export enum AccountEndRegistry {
  recordCode = 'recordCode',
  entityKey = 'entityKey',
  officeKey = 'officeKey',
  accountNumber = 'accountNumber',
  debitNotesNumber = 'debitNotesNumber',
  totalDebitAmount = 'totalDebitAmount',
  creditNotesNumber = 'creditNotesNumber',
  totalCreditAmount = 'totalCreditAmount',
  finalBalanceCode = 'finalBalanceCode',
  finalBalance = 'finalBalance',
  currencyKey = 'currencyKey',
  free = 'free',
}

export const accountEndRegistryPosition: RegistryPosition = {
  [AccountEndRegistry.recordCode]: [1, 2],
  [AccountEndRegistry.entityKey]: [3, 4],
  [AccountEndRegistry.officeKey]: [7, 4],
  [AccountEndRegistry.accountNumber]: [11, 10],
  [AccountEndRegistry.debitNotesNumber]: [21, 5],
  [AccountEndRegistry.totalDebitAmount]: [26, 14],
  [AccountEndRegistry.creditNotesNumber]: [40, 5],
  [AccountEndRegistry.totalCreditAmount]: [45, 14],
  [AccountEndRegistry.finalBalanceCode]: [59, 1],
  [AccountEndRegistry.finalBalance]: [60, 14],
  [AccountEndRegistry.currencyKey]: [74, 3],
  [AccountEndRegistry.free]: [77, 4],
}
