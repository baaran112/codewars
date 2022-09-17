// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

// My solution
function abbrevName(name){
    name = name.split(" ");
    let first = name[0];
    let second = name[1];
    first = first.toString().substring(1, -1).toUpperCase();
    second = second.toString().substring(1, -1).toUpperCase();
    return first + "." + second
  }