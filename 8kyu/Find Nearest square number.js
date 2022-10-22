// DESCRIPTION:
// Your task is to find the nearest square number, nearest_sq(n), of a positive integer n.

// Goodluck :)

// Check my other katas:

// Alphabetically ordered

// Case-sensitive!

// Not prime numbers

const nearestSq = (num) => {
    let result = 0;
    let result2 = 0;
    
    for (let i = num ; i > 0 ; i--){
      if ( Number.isInteger( Math.sqrt( i ) ) ) {
        result = i;
        break;
      } 
    }
    for (let i = num ; i > 0 ; i++){
      if ( Number.isInteger( Math.sqrt( i ) ) ) {
        result2 = i;
        break;
      } 
    }
    return Math.abs(result-num) > Math.abs(result2-num)? result2 : result; 
  }