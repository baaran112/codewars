// DESCRIPTION:
// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!

function doubleChar(str) {
    str = str.split("");
    let result = [];
    for (let i = 0 ; i < str.length ; i++){
      result[i] = str[i].repeat(2);
    }
    return result.join("");
  }