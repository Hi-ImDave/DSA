// Given an array of integers between 1 and n, inclusive, where n is the length of the array, write a function that returns the first integer that appears more than once. If no integer appears more than once, your function should return -1
// Return:
// Example: input - return -
// Pseudo Code:

function firstDuplicateValue(array) {
    let visited = {};
    for(num of array){
      if(num in visited){
        return num;
      } else{
        visited[num] = true
      }
    }
    return -1;
  }

