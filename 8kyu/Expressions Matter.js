// Task
// Given three integers a ,b ,c, return the largest number obtained after inserting the following operators and brackets: +, *, ()
// In other words , try every combination of a,b,c with [*+()] , and return the Maximum Obtained (Read the notes for more detail about it)

function expressionMatter(a, b, c) {
    let sum1, sum2, sum3, sum4, sum5, sum6;
    sum1 = a*(b+c);
    sum2 = a*b*c;
    sum3 = a+b*c;
    sum4 = (a+b)*c;
    sum5 = a*b+c;
    sum6 = a+b+c;
    return Math.max(sum1, sum2, sum3, sum4, sum5, sum6);
  }