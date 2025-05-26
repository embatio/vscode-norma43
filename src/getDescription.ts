import vscode from 'vscode'
import { extractorByPosition, isInBetween } from './utils/utils'
import { getDispatchFunction } from './dispatchFunctions'
import { Norma43Registry } from './interfaces'
import { accountStartRegistries } from './locale/en/accountStartRegistries'

export enum AccountStartRegistry {
  recordCode = 'recordCode',
  entityKey = 'entityKey',
  officeKey = 'officeKey',
  accountNumber = 'accountNumber',
  startDate = 'startDate',
  endDate = 'endDate',
  debitCreditKey = 'debitCreditKey',
  initialBalance = 'initialBalance',
  currencyKey = 'currencyKey',
  mode = 'mode',
  abbreviatedName = 'abbreviatedName',
  freeField = 'freeField',
}

const accountStartRegistryPosition: Record<string, [number, number]> = {
  [AccountStartRegistry.recordCode]: [1, 2],
  [AccountStartRegistry.entityKey]: [3, 4],
  [AccountStartRegistry.officeKey]: [7, 4],
  [AccountStartRegistry.accountNumber]: [11, 10],
  [AccountStartRegistry.startDate]: [21, 6],
  [AccountStartRegistry.endDate]: [27, 6],
  [AccountStartRegistry.debitCreditKey]: [33, 1],
  [AccountStartRegistry.initialBalance]: [34, 14],
  [AccountStartRegistry.currencyKey]: [48, 3],
  [AccountStartRegistry.mode]: [51, 1],
  [AccountStartRegistry.abbreviatedName]: [52, 26],
  [AccountStartRegistry.freeField]: [78, 3],
}

function extractByRegistry(registryPosition: Record<string, [number, number]>, registry: string, line: string) {
  if (!registryPosition[registry]) {
    throw new Error(`Registry ${registry} not found`)
  }

  const [start, length] = registryPosition[registry]
  return extractorByPosition(line, start, length)
}

export function getDescription(position: vscode.Position, line: string) {
  if (line.startsWith('11')) {
    const registry = isInBetween(position.character, accountStartRegistryPosition)

    if (!registry) {
      return
    }

    return composeMarkdown(registry as AccountStartRegistry, position, line)
  }
}

function composeMarkdown(registry: AccountStartRegistry, position: vscode.Position, line: string) {
  let word = extractByRegistry(accountStartRegistryPosition, registry, line)
  const registryDescription = extractRegistryDescription(registry)

  if (registryDescription?.transformFunction) {
    const extraArgs = registryDescription.extraArgs?.map((arg) =>
      extractByRegistry(accountStartRegistryPosition, arg, line)
    )
    const transformedWord = getDispatchFunction(registryDescription.transformFunction)(word, ...(extraArgs ?? []))
    word = transformedWord
  }

  if (!registryDescription) {
    return
  }

  const markdownString = new vscode.MarkdownString()
  markdownString.appendMarkdown('```\n')
  markdownString.appendMarkdown(word)
  markdownString.appendMarkdown('\n```\n\n')
  markdownString.appendMarkdown(`**${registryDescription.name}**\n\n`)
  markdownString.appendMarkdown(`${registryDescription.description}\n\n`)
  if (registryDescription.seeMore) {
    markdownString.appendMarkdown('\n---\n')
    markdownString.appendMarkdown(`*@see* — ${registryDescription.seeMore}`)
  }

  return new vscode.Hover(markdownString, generateRange(position.line, registry))
}

function generateRange(lineIndex: number, registry: AccountStartRegistry) {
  const [start, length] = accountStartRegistryPosition[registry]
  return new vscode.Range(new vscode.Position(lineIndex, start - 1), new vscode.Position(lineIndex, start + length - 1))
}

function extractRegistryDescription(registry: AccountStartRegistry): Norma43Registry | undefined {
  return accountStartRegistries.find((item) => item.id === registry)
}
