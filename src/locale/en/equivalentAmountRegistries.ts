import { Norma43Registry } from '../../interfaces'

export const equivalentAmountRegistries: Norma43Registry[] = [
  {
    id: 'recordCode',
    name: 'Record code',
    description: 'Always **24** for equivalent amount records.',
    seeMore:
      '[Norma 43 documentation](https://www.caixabank.es/deployedfiles/empresas/Estaticos/pdf/Transferenciasyficheros/q43Junio2012.pdf)',
  },
  {
    id: 'dataCode',
    name: 'Data code',
    description: 'Always **01** for equivalent amount records.',
  },
  {
    id: 'originCurrencyKey',
    name: 'Origin currency key',
    description: 'Three-digit currency key of the origin currency. In ISO 4217 format.',
    seeMore: '[ISO 4217 currency codes](https://en.wikipedia.org/wiki/ISO_4217)',
    transformFunction: 'transformCurrencyKey',
  },
  {
    id: 'amount',
    name: 'Amount',
    description: 'Amount of the entry in the origin currency. Includes two decimal places without the comma.',
    transformFunction: 'transformAmount',
  },
  {
    id: 'free',
    name: 'Free',
    description: 'Free field. Filled with spaces.',
  },
]
