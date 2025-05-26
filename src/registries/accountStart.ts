import { RegistryPosition } from '../interfaces'

enum AccountStartRegistry {
  recordCode = 'recordCode',
  entityKey = 'entityKey',
  officeKey = 'officeKey',
  accountNumber = 'accountNumber',
  startDate = 'startDate',
  endDate = 'endDate',
  debitCreditKey = 'debitCreditKey',
  initialBalance = 'initialBalance',
  currencyKey = 'currencyKey',
  mode = 'mode',
  abbreviatedName = 'abbreviatedName',
  freeField = 'freeField',
}

export const accountStartRegistryPosition: RegistryPosition = {
  [AccountStartRegistry.recordCode]: [1, 2],
  [AccountStartRegistry.entityKey]: [3, 4],
  [AccountStartRegistry.officeKey]: [7, 4],
  [AccountStartRegistry.accountNumber]: [11, 10],
  [AccountStartRegistry.startDate]: [21, 6],
  [AccountStartRegistry.endDate]: [27, 6],
  [AccountStartRegistry.debitCreditKey]: [33, 1],
  [AccountStartRegistry.initialBalance]: [34, 14],
  [AccountStartRegistry.currencyKey]: [48, 3],
  [AccountStartRegistry.mode]: [51, 1],
  [AccountStartRegistry.abbreviatedName]: [52, 26],
  [AccountStartRegistry.freeField]: [78, 3],
}
