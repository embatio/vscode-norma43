import { RegistryPosition } from '../interfaces'

export enum EquivalentAmountRegistry {
  recordCode = 'recordCode',
  dataCode = 'dataCode',
  originCurrencyKey = 'originCurrencyKey',
  amount = 'amount',
  free = 'free',
}

export const equivalentAmountRegistryPosition: RegistryPosition = {
  [EquivalentAmountRegistry.recordCode]: [1, 2],
  [EquivalentAmountRegistry.dataCode]: [3, 2],
  [EquivalentAmountRegistry.originCurrencyKey]: [5, 3],
  [EquivalentAmountRegistry.amount]: [8, 14],
  [EquivalentAmountRegistry.free]: [22, 59],
}
