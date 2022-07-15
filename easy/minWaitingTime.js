// You're given a non-empty array of positive integers representing the amounts of time that specific queries take to execute. Only one query can be executed at a time, but the queries can be executed in any order. A query's waiting time is defined as the amount of time that it must wait before its execution starts. In other words, if a query is executed second, then its waiting time is the duration of the first query; if a query is executed third, then its waiting time is the sum of the durations of the first two queries. Write a function that returns the minimum amount of total waiting time for all of the queries. For example, if you're given the queries of durations [1, 4, 5], then the total waiting time if the queries were executed in the order of [5, 1, 4] would be (0) + (5) + (5 + 1) = 11. The first query of duration 5 would be executed immediately, so its waiting time would be 0, the second query of duration 1 would have to wait 5 seconds (the duration of the first query) to be executed, and the last query would have to wait the duration of the first two queries befor being executed.
// Return:
// Example: input - return -
// Pseudo Code:

function minimumWaitingTime(queries) {
    let sortedArray = mergeSort(queries)
    let minWaiting = 0
    for(let i = 0; i < sortedArray.length ; i++){
        const time = sortedArray[i]
        const remaining = queries.length - (i + 1)
        minWaiting += time * remaining
    }
    return minWaiting
  }
  
  function mergeSort(array){
      if(array.length <= 1) return array;
      const copyArray = array.slice();
      mergeSortHelper(array, 0, array.length - 1, copyArray);
      return array;
  }
  
  function mergeSortHelper(mainArray, startIndex, endIndex, copyArray){
      if(startIndex === endIndex) return;
      const middleIndex = Math.floor((startIndex + endIndex) / 2)
      mergeSortHelper(copyArray, startIndex, middleIndex, mainArray);
      mergeSortHelper(copyArray, middleIndex + 1, endIndex, mainArray);
      doMerge(mainArray, startIndex, middleIndex, endIndex, copyArray);
  }
  
  function doMerge(mainArray, startIndex, middleIndex, endIndex, copyArray){
      let k = startIndex;
      let i = startIndex;
      let j = middleIndex + 1
      while(i <= middleIndex && j <= endIndex){
          if(copyArray[i] <= copyArray[j]){
              mainArray[k++] = copyArray[i++]
          } else{
              mainArray[k++] = copyArray[j++]
          }
      }
      while(i <= middleIndex){
          mainArray[k++] = copyArray[i++]
      }
      while(j <= endIndex){
          mainArray[k++] = copyArray[j++]
      }
}