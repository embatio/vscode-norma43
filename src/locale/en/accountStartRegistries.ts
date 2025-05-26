import { Norma43Registry } from '../../interfaces'

export const accountStartRegistries: Norma43Registry[] = [
  {
    id: 'recordCode',
    name: 'Record code',
    description: 'Always **11** for account start records.',
    seeMore:
      '[Norma 43 documentation](https://www.caixabank.es/deployedfiles/empresas/Estaticos/pdf/Transferenciasyficheros/q43Junio2012.pdf)',
  },
  {
    id: 'entityKey',
    name: 'Bank code',
    description: 'The 4-digit bank code of the account.',
    seeMore: '[Transform bank, office and account number to IBAN](https://generate-iban.vercel.app/)',
  },
  {
    id: 'officeKey',
    name: 'Office code',
    description: 'The 4-digit office code of the account.',
    seeMore: '[Transform bank, office and account number to IBAN](https://generate-iban.vercel.app/)',
  },
  {
    id: 'accountNumber',
    name: 'Account number',
    description: 'The 10-digit account number.',
    seeMore: '[Transform bank, office and account number to IBAN](https://generate-iban.vercel.app/)',
  },
  {
    id: 'startDate',
    name: 'Start date',
    description: 'Date of the first transaction in the file. Format: YYMMDD',
    transformFunction: 'transformDate',
  },
  {
    id: 'endDate',
    name: 'End date',
    description: 'Date of the last transaction in the file. Format: YYMMDD',
    transformFunction: 'transformDate',
  },
  {
    id: 'debitCreditKey',
    name: 'Debit/Credit key',
    description: 'Debit/credit key of the transaction. 1 = Debit, 2 = Credit',
    transformFunction: 'transformDebitCreditKey',
  },
  {
    id: 'initialBalance',
    name: 'Initial balance',
    description:
      'Initial balance of the account. Includes two decimal places without the comma.\n\nCombined with the debit/credit key, it can be used to calculate the balance of the account.',
    transformFunction: 'transformAmount',
    extraArgs: ['debitCreditKey'],
  },
  {
    id: 'currencyKey',
    name: 'Currency key',
    description: 'Three-digit currency key of the transaction. In ISO 4217 format.',
    seeMore: '[ISO 4217 currency codes](https://en.wikipedia.org/wiki/ISO_4217)',
    transformFunction: 'transformCurrencyKey',
  },
  {
    id: 'mode',
    name: 'Information modality',
    description: 'Information modality code. Can be 1, 2 or 3.',
    transformFunction: 'transformMode',
  },
  {
    id: 'abbreviatedName',
    name: 'Abbreviated name',
    description: 'Abbreviated name of the owner of the account.',
  },
  {
    id: 'freeField',
    name: 'Free field',
    description: 'Free field. Filled with spaces.',
  },
]
