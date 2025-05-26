import { describe, it, expect } from 'vitest'
import { convertToNumber } from './utils'

describe('convertToNumber', () => {
  it('should convert a string to a number', () => {
    expect(convertToNumber('100')).toBe(1)
  })
})
