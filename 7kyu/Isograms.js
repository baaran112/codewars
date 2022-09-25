// An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true "aba" --> false "moOse" --> false (ignore letter case)

function isIsogram(str){
    return !str.match(/([a-z]).*\1/i);
  }

// () Groups multiple tokens together and creates a capture group for extracting a substring or using a backreference.
// Example:
// (ha)+
// hahaha haa hah!

// [] Match any character in the set.
// Example
// [aeiou]
// gl[i]b j[o]cks v[e]x dw[a]rv[e]s!

// [a-z] Matches a character having a character code between the two specified characters inclusive.
// Example
// [g-s]
// abcdef[ghijklmnopqrs]tuvwxyz

// . Matches any character except linebreaks. Equivalent to [^\n\r].
// Example
// .
// [glib jocks vex dwarves!]

// * Matches 0 or more of the preceding token.
// Example
// b\w*
// [b] [be] [bee] [beer] [beers]

// \1 Matches the results of a capture group. For example \1 matches the results of the first capture group & \3 matches the third.
// Example
// (\w)a\1
// [hah] [dad] bad dab [gag] gab