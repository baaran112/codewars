// DESCRIPTION:
// This is the simple version of Shortest Code series. If you need some challenges, please try the challenge version.

// Task:
// Find out "B"(Bug) in a lot of "A"(Apple).

// There will always be one bug in apple, not need to consider the situation that without bug or more than one bugs.

// input: string Array apple

// output: Location of "B", [x,y]

function sc(apple){
    let findX = 0;
    let findY = 0;
    let search;
    let result = [];
    let i = apple[0].length;
  for (let x = 0, y = 0; x < apple.length, y < apple.length ; y++){
      search = apple[x].indexOf("B");
      if (search != -1){
          findX = x;
          findY = apple[x].indexOf("B");
      }else x++;
  }
    result.push(findX);
    result.push(findY);
    return result;
  }