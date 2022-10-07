const chaosRepair = (string) => {
  return string
    .slice(string.indexOf('c') + 1)
    .replaceAll('Eek!', '')
    .split('')
    .reverse()
    .join('')
}
