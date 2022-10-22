
// DESCRIPTION:
// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.

// Note: input will never be an empty string
function fakeBin(x){
    let result = x.split("");
    for (let i = 0 ; i < x.length ; i++) {
      result[i] >= 5? result[i] = 1 : result[i] = 0;
    }
    return result.join("");
  }