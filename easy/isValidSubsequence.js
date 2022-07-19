// Given two non-empty arrays of integers, write a function that determines whether the second array is a subsequence of the first one.
// Return:
// Example: input - return -
// Pseudo Code:

function isValidSubsequence(array, sequence) {
    let arrayPointer = 0
    let sequencePointer = 0;
    while(arrayPointer < array.length && sequencePointer < sequence.length){
        if(array[arrayPointer] === sequence[sequencePointer]) sequencePointer++
        arrayPointer++;
    }
    return sequencePointer === sequence.length;
}

isValidSubsequence([1, 2, 3, 4, 5, 6, 7, 8], [2, 4, 6, 8])