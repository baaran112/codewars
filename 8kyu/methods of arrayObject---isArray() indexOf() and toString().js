// Coding in function blackAndWhite. function accept 1 parameter arr(a number array).

// If arr is not an array, function should return:

// "It's a fake array"
// If arr contains elements 5 and 13, function should return:

// "It's a black array"
// If arr contains neither 5 nor 13, function should return:

// "It's a white array"
// Examples
// blackAndWhite(5,13) should return "It's a fake array"
// blackAndWhite([5,13]) should return "It's a black array"
// blackAndWhite([5,12]) should return "It's a white array" 
// Using string template and ternary operator can make your work easier.

// my solution
function blackAndWhite(arr){
    let x = Array.isArray(arr);
    if (x == 0) return "It's a fake array"
  
    let y = arr.indexOf(5);
    let z = arr.indexOf(13);
    if (y != -1 && z != -1 ) return "It's a black array"
    if (y != -1 || z != -1 || x != 0) return "It's a white array"
  }