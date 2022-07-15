// The Fibonacci sequence is defined as follows: the first number of the sequence is 0, the second number is <span>1</span>, and the nth number is the sum of the (n - 1)th and (n - 2)th numbers. Write a function that takes in an integer n and returns the nth Fibonacci number.
// Return:
// Example: input - return -
// Pseudo Code:

function getNthFib(n) {
    if(n === 1){
      return 0;
    } else if(n === 2){
      return 1;
    } else{
      return getNthFib(n - 1) + getNthFib(n - 2)
    }
  }