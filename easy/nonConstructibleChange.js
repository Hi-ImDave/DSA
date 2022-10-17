function nonConstructibleChange(coins) {
  let currentChange = 0
  const sortedCoins = coins.sort((a, b) => a - b, 0)
  for (coin of coins) {
    if (coin > currentChange + 1) return currentChange + 1

    currentChange += coin
  }
  return currentChange + 1
}

nonConstructibleChange([5, 7, 1, 1, 2, 3, 22])
