/* eslint-disable no-self-compare */
const resistorColor = (color) => {
  const colors = ['Black', 'Brown', 'Red', 'Orange', 'Yellow', 'Green', 'Blue', 'Violet', 'Grey', 'White']
  return color ? colors.findIndex(_color => _color.toLowerCase() === color.toLowerCase()) : colors
}

module.exports = {
  resistorColor
}

resistorColor('black')
