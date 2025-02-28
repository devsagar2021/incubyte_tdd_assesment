import { describe, expect, it } from 'vitest'
import add from './add'

describe('add() should calculate numbers', () => {
  it('Should return 0 for empty string', () => {
    expect(add("")).toEqual(0)
  })

  it('Should return 1 for "1"', () => {
    expect(add("1")).toEqual(1)
  })

  it('Should return 6 for "1,5"', () => {
    expect(add("1,5")).toEqual(6)
  })

  it('Should return 10 fro "5,2,10,1,2"', () => {
    expect(add("5,2,10,1,2")).toEqual(20)
  })
})
