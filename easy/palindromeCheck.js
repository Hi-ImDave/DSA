// Write a function that takes in a non-empty string and that returns a boolean representing whether the string is a palindrome.
// Return:
// Example: input - return -
// Pseudo Code:

function isPalindrome(string) {
    let left = 0;
    let right = string.length - 1;
    while(left < right){
      if(string[left] !== string[right]) return false
        left++
        right --
    }
    return true
  }