const punDecisions = (string) => {
  let filteredList = string.split(',').filter((title) => {
    title[0] !== ' ' &&
      title[title.length - 1] !== ' ' &&
      title.length % 5 !== 0 &&
      (title.charCodeAt(0) + title.charCodeAt(title.length - 1)) % 2 !== 0 &&
      title[Math.ceil(title.length / 2)] !== 'e' &&
      title.toLowerCase().includes('dog') !== true &&
      title.toLowerCase().includes('bark') !== true &&
      title.toLowerCase().includes('bone') !== true &&
      title.includes('S') !== true &&
      lowerCaseCount(title) % 2 === 0 &&
      upperCaseCount(title) >= 2
  })

  return filteredList
}

const lowerCaseCount = (string) => {
  return string.length - string.replace(/[a-z]/g, '').length
}

const upperCaseCount = (string) => {
  return string.length - string.replace(/[A-Z]/g, '').length
}
