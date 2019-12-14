/* ---------- NUMBER GUESSING GAME ---------- */


/* --- 2ND ATTEMPT --- */

function guessNumber(randomNumber, message, maxGuesses, totalGuesses = 1) {

    if (totalGuesses > maxGuesses) {
        return "Sorry. The correct answer was " + randomNumber + "!";  
    }

    const guess = prompt(message);

    if(parseInt(guess) === randomNumber) {
        return "Nice guess! " + guess + " is right!";
    }

    if(parseInt(guess) < randomNumber) {
        return guessNumber(randomNumber, "Sorry, the number is higher than " + guess + ". You have one guess left!", maxGuesses, totalGuesses + 1);
    }

    if(parseInt(guess) > randomNumber) {
        return guessNumber(randomNumber, "Sorry, the number is less than " + guess + ". You have one guess left!", maxGuesses, totalGuesses + 1);
    }
}

const randomNumber = Math.floor(Math.random() * 6) + 1;
const message = guessNumber(randomNumber, "Guess a random number between 1 and 6!", 2);
alert(message)

/* --- 1st ATTEMPT --- ||

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

    || --- 1ST ATTEMPT--- */
