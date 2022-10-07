const addSpace = (string) => {
  const replacements = {
    S: ' ',
    p: ' ',
    a: ' ',
    c: ' ',
    e: ' ',
  }
  let result = ''
  for (letter of string) {
    if (letter in replacements) {
      result += replacements[letter]
    } else {
      result += letter
    }
  }
  return result
}
