/* eslint-disable array-callback-return */
const firstNonRepeatingCharacter = (s = '') => {
  if (s === '' || s === undefined) return ''

  const uniqueCharacters = s.split('').map(character => {
    const regex = new RegExp(`${character === '?' ? '\\' : ''}${character}`, 'ig')
    const matchs = s.match(regex)

    return matchs.length === 1 ? matchs[0] : ''
  })

  const unique = uniqueCharacters.join('').split('')[0]

  return unique !== undefined ? unique : ''
}

module.exports = { firstNonRepeatingCharacter }
