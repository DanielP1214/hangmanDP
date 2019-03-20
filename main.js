// GLOBAL VARIABLES (accesible by all functions)








// this will break the solution into individual
// letters to be stored in array
var lettersInChosenWord = [];

// This will be the number of blanks we show based on the solution


// Holds a mix of blank and solved letters (ex: 'a_ple)
var blanksAndSuccess = [];

// Holds all of the wrong guesses
var wrongGuesses = [];


// Game counters
var winCounter = 0;
var lossCounter = 0;
var numGuesses = 0;


// FUNCTIONS
// -----------------------------------------------------------------------------------------------------

// Note: startGame() is not being run here. It's just being made for
//       future use
function startGame(){

    // resets the guesses back to 
    numGuesses = 9;

    // Solution is chosen
    chosenWord = wordsList[Math.floor(Math.random() * wordsList.length)];

    // The word is broken into individual letters
    lettersInChosenWord = chosenWord.split("");

    // We count the number of letters in the word
    numBlanks = lettersInChosenWord.length;

    // We print the solution in console (for testing)
    console.log(chosenWord);

    // CRITICAL LINE - Here we reset the guess and success array at each round
    blanksAndSuccess = [];
    // CRITICAL LINE - Here we reset the wrong guesses from the previous round
    wrongGuesses = [];

    // FILL up the blanks and successes list with appropiate number of blanks,
    // which will be based on the number of letters in the solution
    for (var i = 0; i < numBlanks; i++){
        blanksAndSuccess.push("_");
    }

    // Print the initial blanks in the console
    console.log(blanksAndSuccess);

    // Reprints the guessesLeft to 9
    document.getElementById("guesses_left").innerHTML = numGuesses;
    
    // Prints the blanks at the beginning of each round in the HTML
    document.getElementById("word-blanks").innerHTML = blanksAndSuccess.join (" ");

    // Cleas the wrong guesses from the previous round
    document.getElementById.("wrong-guesses").innerHTML = 
}