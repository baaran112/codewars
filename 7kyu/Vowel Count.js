// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    const regexp = /[aeiou]/gi; // regular expression for vowels /g - global /i - all letters (small/big)
    let result = str.match(regexp) || []; // this method return empty array when result is null 
    return result.length;
}