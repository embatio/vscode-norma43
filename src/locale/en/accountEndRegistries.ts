import { Norma43Registry } from '../../interfaces'

export const accountEndRegistries: Norma43Registry[] = [
  {
    id: 'recordCode',
    name: 'Record code',
    description: 'Always **33** for account end records.',
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
    id: 'debitNotesNumber',
    name: 'Debit notes number',
    description: 'Number of debit notes in the account.',
    transformFunction: 'transformNumber',
  },
  {
    id: 'totalDebitAmount',
    name: 'Total debit amount',
    description: 'Sum of the amounts of debit movements.',
    transformFunction: 'transformNegativeAmount',
  },
  {
    id: 'creditNotesNumber',
    name: 'Credit notes number',
    description: 'Number of credit notes in the account.',
    transformFunction: 'transformNumber',
  },
  {
    id: 'totalCreditAmount',
    name: 'Total credit amount',
    description: 'Sum of the amounts of credit movements.',
    transformFunction: 'transformPositiveAmount',
  },
  {
    id: 'finalBalanceCode',
    name: 'Final balance code',
    description: 'Final balance code. 1 = Debit, 2 = Credit',
    transformFunction: 'transformDebitCreditKey',
  },
  {
    id: 'finalBalance',
    name: 'Final balance',
    description:
      'Final balance of the account after applying all movements. Includes two decimal places without the comma.',
    transformFunction: 'transformAmount',
    extraArgs: ['finalBalanceCode'],
  },
  {
    id: 'currencyKey',
    name: 'Currency key',
    description: 'Three-digit currency key in which the account operates. In ISO 4217 format.',
    seeMore: '[ISO 4217 currency codes](https://en.wikipedia.org/wiki/ISO_4217)',
    transformFunction: 'transformCurrencyKey',
  },
  {
    id: 'freeField',
    name: 'Free field',
    description: 'Free field. Filled with spaces.',
  },
]
