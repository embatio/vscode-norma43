export type RegistryPosition = Record<string, [number, number]>

export type Norma43Registry = {
  id: string
  name: string
  description: string
  seeMore?: string
  transformFunction?: string
  extraArgs?: string[]
}
