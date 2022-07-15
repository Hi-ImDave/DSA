// Write a function that takes in a sorted array of integers as well as a target integer. The function should use the Binary Search algorithm to determine if the target integer is contained in the array and should return its index if it is, otherwise -1
// Return:
// Example: input - return -
// Pseudo Code:

function binarySearch(array, target) {
    let left = 0;
    let right = array.length - 1;
    while(left <= right){
      const middle = Math.floor((left + right) / 2);
      if(array[middle] === target) return middle;
      if(array[middle] < target){
        left = middle + 1;
      } else{
        right = middle - 1;
      }
    }
    return -1
  }