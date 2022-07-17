// Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. If any two numbers in the input array sum up to the target sum, the function should return them in an array, in any order. If no two numbers sum up to the target sum, the function should return an empty array.
// Return:
// Example: input - return -
// Pseudo Code:

function twoNumberSum(array, targetSum) {
    let visited = {};
    for(const num of array){
      const compliment = targetSum - num;
      if(compliment in visited){
        return [compliment, num]
      } else {
        visited[num] = true;
      }
    }
    return [];
  }

  twoNumberSum([10, 3, 5, 27, 8, 1], 6)