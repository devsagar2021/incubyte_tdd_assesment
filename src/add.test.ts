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

  it('Should return 6 for "1\n2,3"', () => {
    expect(add("1\n2,3")).toEqual(6)
  })

  it('Should return 3 for "//;\n1;2" with custom delimiter ";"', () => {
    expect(add("//;\n1;2")).toEqual(3)
  })

  it('Should return 5 for "//.\n1.2.2" with custom delimiter "."', () => {
    expect(add("//.\n1.2.2")).toEqual(5)
  })

  it('Throw error for negative numbers', () => {
    expect(() => add("1,-2,3,-6")).toThrowError("Negatives not allowed: -2,-6")
  })

  it('Should ignore numbers greater than 1000', () => {
    expect(add("2,1001")).toEqual(2)
  })

  it('Should return 6 for "//[***]\n1***2***3"', () => {
    expect(add("//[***]\n1***2***3")).toEqual(6)
  })

  it('Should return 6 for "//[*][%]\n1*2%3"', () => {
    expect(add("//[*][%]\n1*2%3")).toEqual(6)
  })

  it('Should return 6 for "//[**][%%]\n1**2%%3"', () => {
    expect(add("//[**][%%]\n1**2%%3")).toEqual(6)
  })
})
