// You're given two positive integers representing the width and height of a grid-shaped, rectangular graph. Write a function that returns the number of ways to reach the bottom right corner of the graph when starting at the top left corner. Each move you take must either go down or right. In other words, you can never move up or left in the graph.
// Return:
// Example: input - return -
// Pseudo Code:

function numberOfWaysToTraverseGraph(width, height) {
    if(width === 1 || height === 1) return 1
      return numberOfWaysToTraverseGraph(width - 1, height) + numberOfWaysToTraverseGraph(width, height - 1)
}