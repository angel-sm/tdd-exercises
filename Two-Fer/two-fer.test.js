/* eslint-disable no-undef */
const { twoFer } = require('./index')

describe('Two-Fer', () => {
  test('should return One for you, one for me.', () => {
    expect(twoFer()).toBe('One for you, one for me.')
  })
  test('should return One for name, one for me.', () => {
    const name = 'Jose'
    expect(twoFer(name)).toBe(`One for ${name}, one for me.`)
  })
})
