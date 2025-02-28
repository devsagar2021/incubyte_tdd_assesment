import { describe, expect, it } from 'vitest'
import add from './add'

describe('add() should calculate numbers', () => {
  it('Should return 0 for empty string', () => {
    expect(add("")).toEqual(0)
  })

  it('Should return 1 for "1"', () => {
    expect(add("1")).toEqual(1)
  })
})
