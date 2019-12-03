/* ---------- NUMBER GUESSING GAME ---------- */

/* --- 1st ATTEMPT --- */

// Variables

var correctGuess = false;
var randomNumber = Math.floor(Math.random() * 6) + 1;
var firstGuess = prompt("Guess a random number between 1 and 6!")


// Conditionals

if (parseInt(firstGuess) === randomNumber) {
    correctGuess = true;
} 

else if (firstGuess > randomNumber) {
    var secondGuess = prompt('The number I am thinking of is less than ' + firstGuess + '.');
    if (parseInt(secondGuess) === randomNumber) {
        correctGuess = true;
    }
} 

else if (firstGuess > randomNumber) {
    var secondGuess = prompt('The number I am thinking of is more than ' + firstGuess + '.');
    if (parseInt(secondGuess) === randomNumber) {
        correctGuess = true;
    }
}

if (correctGuess) {
    document.write('<p>Boom! You guessed the number!</p>')
} else {
    document.write('<p>Bummer! You lose!</p>')
}


/* -------- 2ND ATTEMPT -------- */

