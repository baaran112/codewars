// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function findAverage(array) {
    let average = 0;
    if (array == 0) return 0;
    for(let i = 0; i < array.length ; i++){
      average += array[i];
    }
    return (average / (array.length)) 
  }