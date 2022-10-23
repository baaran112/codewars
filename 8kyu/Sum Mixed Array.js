// DESCRIPTION:
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

const sumMix = (x) => {
    let result = 0
    x.map( e => result += e*1 ) 
    return result;
  }