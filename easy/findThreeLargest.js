// Write a function that takes in an array of at least three integers and without sorting the input array, returns a sorted array of the three largest integers in the input array.

// Return:
// Example: input - return -
// Pseudo Code:

function findThreeLargestNumbers(array) {
    const topThree = new Array(3).fill(-Infinity)
    for(number of array){
        if(number > topThree[0]){
            topThree[0] = number;
        }
        if(topThree[0] >= topThree[1]){
            swap(topThree, 0, 1)
        }
        if(topThree[1] >= topThree[2]){
            swap(topThree, 1, 2)
        }
    }
    return topThree
  }
  
  function swap(array, leftIdx, rightIdx){
    const temp = array[leftIdx];
    array[leftIdx] = array[rightIdx];
    array[rightIdx] = temp;
    return array
  }