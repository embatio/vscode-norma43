import { RegistryPosition } from '../interfaces'

export enum ComplementaryConceptRegistry {
  recordCode = 'recordCode',
  dataCode = 'dataCode',
  concept1 = 'concept1',
  concept2 = 'concept2',
}

export const complementaryConceptRegistryPosition: RegistryPosition = {
  [ComplementaryConceptRegistry.recordCode]: [1, 2],
  [ComplementaryConceptRegistry.dataCode]: [3, 2],
  [ComplementaryConceptRegistry.concept1]: [5, 38],
  [ComplementaryConceptRegistry.concept2]: [43, 38],
}
