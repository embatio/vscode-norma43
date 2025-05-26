import vscode from 'vscode'
import { Norma43Registry, RegistryPosition } from './interfaces'
import { accountStartRegistries } from './locale/en/accountStartRegistries'
import { getDispatchFunction } from './utils/dispatchFunctions'
import { extractByRegistry, extractRegistryDescription, generateRange, getRegistry } from './utils/utils'
import { accountStartRegistryPosition } from './registries/accountStart'
import { complementaryConceptRegistryPosition } from './registries/complementaryConcept'
import { accountEndRegistries } from './locale/en/accountEndRegistries'
import { accountEndRegistryPosition } from './registries/accountEnd'
import { equivalentAmountRegistryPosition } from './registries/equivalentAmount'
import { complementaryConceptRegistries } from './locale/en/complementaryConceptRegistries'
import { equivalentAmountRegistries } from './locale/en/equivalentAmountRegistries'
import { footerRegistries } from './locale/en/footerRegistries'
import { footerRegistryPosition } from './registries/footer'
import { mainMovementRegistries } from './locale/en/mainMovementRegistries'
import { mainMovementRegistryPosition } from './registries/mainMovement'

export function getDescription(position: vscode.Position, line: string) {
  if (line.startsWith('11')) {
    return getMarkdown(position, line, accountStartRegistryPosition, accountStartRegistries)
  } else if (line.startsWith('22')) {
    return getMarkdown(position, line, mainMovementRegistryPosition, mainMovementRegistries)
  } else if (line.startsWith('23')) {
    return getMarkdown(position, line, complementaryConceptRegistryPosition, complementaryConceptRegistries)
  } else if (line.startsWith('24')) {
    return getMarkdown(position, line, equivalentAmountRegistryPosition, equivalentAmountRegistries)
  } else if (line.startsWith('33')) {
    return getMarkdown(position, line, accountEndRegistryPosition, accountEndRegistries)
  } else if (line.startsWith('88')) {
    return getMarkdown(position, line, footerRegistryPosition, footerRegistries)
  }
}

function getMarkdown(
  position: vscode.Position,
  line: string,
  registryPosition: RegistryPosition,
  registryDefinitions: Norma43Registry[]
) {
  const registry = getRegistry(position.character, registryPosition)

  if (!registry) {
    return
  }

  return composeMarkdown(registry, position, line, registryPosition, registryDefinitions)
}

function composeMarkdown(
  registry: string,
  position: vscode.Position,
  line: string,
  registryPosition: RegistryPosition,
  registryDefinitions: Norma43Registry[]
) {
  let word = extractByRegistry(line, registry, registryPosition)
  const registryDescription = extractRegistryDescription(registry, registryDefinitions)

  if (registryDescription?.transformFunction) {
    const extraArgs = registryDescription.extraArgs?.map((arg) => extractByRegistry(line, arg, registryPosition))
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

  return new vscode.Hover(markdownString, generateRange(position.line, registry, registryPosition))
}
