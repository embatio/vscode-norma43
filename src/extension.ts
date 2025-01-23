import vscode from 'vscode'

const COMPLETE_LINE_WIDTH = 80

// This method is called when your extension is activated
export function activate() {
  vscode.languages.registerDocumentFormattingEditProvider('norma43', {
    provideDocumentFormattingEdits(document: vscode.TextDocument): vscode.TextEdit[] {
      const modifiedLines: vscode.TextEdit[] = []
      const invalidLines: number[] = []

      for (let index = 0; index < document.lineCount; index++) {
        const line = document.lineAt(index)

        if (line.isEmptyOrWhitespace) {
          continue
        }

        if (line.text.length < COMPLETE_LINE_WIDTH) {
          const remainingChars = COMPLETE_LINE_WIDTH - line.text.length

          const spacesToComplete = ' '.repeat(remainingChars)
          modifiedLines.push(vscode.TextEdit.insert(line.range.end, spacesToComplete))
        } else if (line.text.length > COMPLETE_LINE_WIDTH) {
          invalidLines.push(index + 1)
        }
      }

      if (invalidLines.length) {
        if (invalidLines.length === 1) {
          vscode.window.showErrorMessage(`Line ${invalidLines[0]} is too long`)
        } else if (invalidLines.length > 1) {
          vscode.window.showErrorMessage(`The following lines are too long: ${invalidLines.join(', ')}`)
        }

        throw new Error('Lines are too long')
      }

      return modifiedLines
    },
  })
}

// This method is called when your extension is deactivated
export function deactivate() {}
