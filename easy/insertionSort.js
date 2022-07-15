//  Write a function that takes in an array of integers and returns a sorted version of that array. Use the Insertion Sort algorithm to sort the array.

// Return:
// Example: input - return -
// Pseudo Code:

function insertionSort(array) {
    for(let i = 1; i < array.length; i++){
      let j = i;
      while(j > 0 && array[j] < array[j-1]){
        swap(j, j-1, array)
        j -= 1
      }
    }
    return array
  }
  
  function swap(i, j, array){
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
   }