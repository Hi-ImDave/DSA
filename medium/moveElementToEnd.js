// You're given an array of integers and an integer. Write a function that moves all instances of that integer in the array to the end of the array and returns the array.

// Return:
// Example: input - return -
// Pseudo Code:

function moveElementToEnd(array, toMove) {
    return array.sort( (a) => a === toMove ? 1 : -1)
  }