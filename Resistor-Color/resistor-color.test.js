/* eslint-disable no-undef */
const { resistorColor } = require('./index')

describe('Resitor-Color', () => {
  test('should return 0', () => {
    expect(resistorColor('black')).toEqual(0)
  })
  test('should return 5', () => {
    expect(resistorColor('green')).toEqual(5)
  })
  test('should return all colors', () => {
    expect(resistorColor()).toEqual(['Black', 'Brown', 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Grey', 'White'])
  })
})
