const fixErrors = (string) => {
  const cipher = {
    0: 'O',
    1: 'I',
    2: 'Z',
    3: 'E',
    4: 'h',
    5: 'S',
    6: 'G',
    7: 'L',
    8: 'B',
    9: 'q',
  }
  let result = ''

  for (let i = 0; i < string.length; i++) {
    if (string[i] in cipher) {
      result += cipher[string[i]]
    } else if (Object.values(cipher).includes(string[i])) {
      result += getKeybyVal(cipher, string[i])
    } else result += string[i]
  }
  return result
}

const getKeybyVal = (object, value) => {
  return Object.keys(object).find((key) => object[key] === value)
}
