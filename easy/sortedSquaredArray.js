// Write a function that takes in a non-empty array of integers that are sorted in ascending order and returns a new array of the same length with the squares of the original integers also sored in ascending order.
// Example: input - [1, 2, 3, 5, 6, 8, 9] return - [1, 4, 9, 25, 36, 64, 81]

function sortedSquaredArray(array) {
    let squareArray = [];
    for( number of array){
      squareArray.push(number ** 2)
    }
    return squareArray.sort((a,b)=>a-b,0);
  }