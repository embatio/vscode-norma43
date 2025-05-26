import { Norma43Registry } from '../../interfaces'

export const footerRegistries: Norma43Registry[] = [
  {
    id: 'recordCode',
    name: 'Record code',
    description: 'Always **88** for footer records.',
    seeMore:
      '[Norma 43 documentation](https://www.caixabank.es/deployedfiles/empresas/Estaticos/pdf/Transferenciasyficheros/q43Junio2012.pdf)',
  },
  {
    id: 'nines',
    name: 'Nines',
    description: 'Sequence of 18 nines.',
  },
  {
    id: 'numberOfRegistries',
    name: 'Number of registries',
    description: 'Number of records in the file. Excluding the footer record itself.',
    transformFunction: 'transformNumber',
  },
  {
    id: 'free',
    name: 'Free field',
    description: 'Free field. Filled with spaces.',
  },
]
