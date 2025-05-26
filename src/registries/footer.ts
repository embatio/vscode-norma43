import { RegistryPosition } from '../interfaces'

export enum FooterRegistry {
  recordCode = 'recordCode',
  nines = 'nines',
  numberOfRegistries = 'numberOfRegistries',
  free = 'free',
}

export const footerRegistryPosition: RegistryPosition = {
  [FooterRegistry.recordCode]: [1, 2],
  [FooterRegistry.nines]: [3, 18],
  [FooterRegistry.numberOfRegistries]: [21, 6],
  [FooterRegistry.free]: [27, 54],
}
