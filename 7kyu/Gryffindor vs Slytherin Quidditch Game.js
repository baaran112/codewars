// DESCRIPTION:
// It's the most hotly anticipated game of the school year - Gryffindor vs Slytherin! Write a function which returns the winning team.

// You will be given two arrays with two values.

// The first given value is the number of points scored by the team's Chasers and the second a string with a 'yes' or 'no' value if the team caught the golden snitch!

// The team who catches the snitch wins their team an extra 150 points - but doesn't always win them the game.

// gameWinners([150, 'yes'],[200, 'no']) //'Gryffindor wins!'
// gameWinners([400, 'no'],[350, 'yes']) //'Slytherin wins!'
// If the score is a tie return "It's a draw!""

// ** The game only ends when someone catches the golden snitch, so one array will always include 'yes' or 'no.' Points scored by Chasers can be any positive integer.

const gameWinners = (g, s) => {
    if (g[1] === "yes") g[0] += 150;
    if (s[1] === "yes") s[0] += 150;
    if (g[0] === s[0]) return "It's a draw!"
    else return g[0] > s[0] ? "Gryffindor wins!" : "Slytherin wins!";
  };