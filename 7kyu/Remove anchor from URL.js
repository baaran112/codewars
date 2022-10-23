// Complete the function/method so that it returns the url with anything after the anchor (#) removed.

// Examples
// "www.codewars.com#about" --> "www.codewars.com"
// "www.codewars.com?page=1" -->"www.codewars.com?page=1"

const removeUrlAnchor = url => url.indexOf( "#" ) === -1 ? url : url.slice( 0 , url.indexOf("#") );

// best i think :D 
const removeUrlAnchor2 = url => url.split('#')[0];