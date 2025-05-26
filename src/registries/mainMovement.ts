import { RegistryPosition } from '../interfaces'

export enum MainMovementRegistry {
  recordCode = 'recordCode',
  freeField = 'freeField',
  originOfficeKey = 'originOfficeKey',
  operationDate = 'operationDate',
  valueDate = 'valueDate',
  commonConcept = 'commonConcept',
  ownConcept = 'ownConcept',
  debitCreditKey = 'debitCreditKey',
  amount = 'amount',
  documentNumber = 'documentNumber',
  reference1 = 'reference1',
  reference2 = 'reference2',
}

export const mainMovementRegistryPosition: RegistryPosition = {
  [MainMovementRegistry.recordCode]: [1, 2],
  [MainMovementRegistry.freeField]: [3, 4],
  [MainMovementRegistry.originOfficeKey]: [7, 4],
  [MainMovementRegistry.operationDate]: [11, 6],
  [MainMovementRegistry.valueDate]: [17, 6],
  [MainMovementRegistry.commonConcept]: [23, 2],
  [MainMovementRegistry.ownConcept]: [25, 3],
  [MainMovementRegistry.debitCreditKey]: [28, 1],
  [MainMovementRegistry.amount]: [29, 14],
  [MainMovementRegistry.documentNumber]: [43, 10],
  [MainMovementRegistry.reference1]: [53, 12],
  [MainMovementRegistry.reference2]: [65, 16],
}
