// DESCRIPTION:
// Python dictionaries are inherently unsorted. So what do you do if you need to sort the contents of a dictionary?

// Create a function that returns a sorted list of (key, value) tuples (Javascript: arrays of 2 items).

// The list must be sorted by the value and be sorted largest to smallest.

// Examples
// sortDict({3:1, 2:2, 1:3}) == [[1,3], [2,2], [3,1]]
// sortDict({1:2, 2:4, 3:6}) == [[3,6], [2,4], [1,2]]

const sortDict = (dict) => {
  
    const sortArr = [];
    
    const sortFunc = (a, b) => b[1] - a[1];  
    
    for (let key in dict) {
      sortArr.push([key, dict[key]]);    
    }
    
    if (parseInt(sortArr[0][0])) {
      for (let i = 0 ; i < sortArr.length ; i++){
        sortArr[i][0] = parseInt(sortArr[i][0]);
      }
    }
    
    sortArr.sort(sortFunc);
    
    return sortArr;
  }