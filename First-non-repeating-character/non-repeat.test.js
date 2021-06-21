/* eslint-disable no-undef */
const { firstNonRepeatingCharacter } = require('./index')

describe('Non repet character tests', () => {
  test('should return empty string', () => {
    expect(firstNonRepeatingCharacter()).toBe('')
  })
  test('should return empty string if a string contains all repeating characters', () => {
    expect(firstNonRepeatingCharacter('a')).toBe('a')
  })
  test('should return the first non repeat character of string passed', () => {
    expect(firstNonRepeatingCharacter('stress')).toBe('t')
  })
  test('should return the first non repeat character of string passed', () => {
    expect(firstNonRepeatingCharacter('moonmen')).toBe('e')
  })
  test('should return the first non repeat character of string passed', () => {
    expect(firstNonRepeatingCharacter('sTreSS')).toBe('T')
  })
  test('should return the first non repeat character of string passed', () => {
    expect(firstNonRepeatingCharacter('aaaaaaaa')).toBe('')
  })
})
