import { Norma43Registry } from '../../interfaces'

export const complementaryConceptRegistries: Norma43Registry[] = [
  {
    id: 'recordCode',
    name: 'Record code',
    description: 'Always **33** for complementary concept records.',
    seeMore:
      '[Norma 43 documentation](https://www.caixabank.es/deployedfiles/empresas/Estaticos/pdf/Transferenciasyficheros/q43Junio2012.pdf)',
  },
  {
    id: 'dataCode',
    name: 'Data code',
    description: 'Sequence number of the complementary concept. Values: 01, 02, 03, 04, 05',
  },
  {
    id: 'concept1',
    name: 'Concept 1',
    description: 'First complementary concept field of 38 positions.',
  },
  {
    id: 'concept2',
    name: 'Concept 2',
    description: 'Second complementary concept field of 38 positions.',
  },
]
