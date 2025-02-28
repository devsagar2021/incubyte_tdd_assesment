import { describe, expect, it } from 'vitest'
import add from './add'

describe('add() should calculate numbers', () => {
  it('Should return 0 for empty string', () => {
    expect(add("")).toEqual(0)
  })
})
