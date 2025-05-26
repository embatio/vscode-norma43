import { Norma43Registry } from '../../interfaces'

export const mainMovementRegistries: Norma43Registry[] = [
  {
    id: 'recordCode',
    name: 'Record code',
    description: 'Always **22** for main movement records.',
    seeMore:
      '[Norma 43 documentation](https://www.caixabank.es/deployedfiles/empresas/Estaticos/pdf/Transferenciasyficheros/q43Junio2012.pdf)',
  },
  {
    id: 'freeField',
    name: 'Free field',
    description: 'Free field. Filled with spaces.',
  },
  {
    id: 'originOfficeKey',
    name: 'Origin office key',
    description: 'The 4-digit origin office key.',
  },
  {
    id: 'operationDate',
    name: 'Operation date',
    description: 'Date of settlement in the account. Format: YYMMDD',
    transformFunction: 'transformDate',
  },
  {
    id: 'valueDate',
    name: 'Value date',
    description: 'Accounting value date for interest calculation purposes. Format: YYMMDD',
    transformFunction: 'transformDate',
  },
  {
    id: 'commonConcept',
    name: 'Common concept',
    description: 'Operation concept key adjusted to the common interbank scale.',
    seeMore:
      '[Common interbank scale](https://www.caixabank.es/deployedfiles/empresas/Estaticos/pdf/Transferenciasyficheros/adaptat43.pdf)',
  },
  {
    id: 'ownConcept',
    name: 'Own concept',
    description: 'Operation key used by each Entity with its customers.',
  },
  {
    id: 'debitCreditKey',
    name: 'Debit/Credit key',
    description: 'Debit/credit key of the transaction. 1 = Debit, 2 = Credit',
    transformFunction: 'transformDebitCreditKey',
  },
  {
    id: 'amount',
    name: 'Amount',
    description: 'Amount of the entry. Includes two decimal places without the comma.',
    transformFunction: 'transformAmount',
    extraArgs: ['debitCreditKey'],
  },
  {
    id: 'documentNumber',
    name: 'Document number',
    description: 'Always in numeric characters.',
  },
  {
    id: 'reference1',
    name: 'Reference 1',
    description:
      'Eleven positions for the reference itself and one position for the "Control digit", calculated according to the standardized form in Anexo 3.',
    seeMore:
      '[Norma 43 documentation - Anexo 3](https://www.caixabank.es/deployedfiles/empresas/Estaticos/pdf/Transferenciasyficheros/q43Junio2012.pdf)',
  },
  {
    id: 'reference2',
    name: 'Reference 2',
    description: 'May contain numeric or alphanumeric characters.',
    seeMore:
      '[Norma 43 documentation - Anexo 3](https://www.caixabank.es/deployedfiles/empresas/Estaticos/pdf/Transferenciasyficheros/q43Junio2012.pdf)',
  },
]
