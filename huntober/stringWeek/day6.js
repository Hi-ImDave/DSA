const removeNth = (string, num) => {
  let result = string
    .split('')
    .filter((curr, index) => (index + 1) % num !== 0)
    .join('')

  return result
}
