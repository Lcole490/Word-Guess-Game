//Javascript Variables to be used throughout

var contestant = prompt("Hello Contestant, what is your name?");
var begin = document.getElementById("player").innerHTML;

var wordBank = ["america", "basketball", "cartoon", "cormitory", "electricity", "fatigue", "gratitude", "hurricane", "impulse", "jungle", "kindergarten","laughter", "mortgage", "november", "oscilloscope" , "prescription", "quarantine", "residue", "scientific", "technology","underwater", "volume", "wandering", "xylophone", "yesterday", "zephyr"];

var wordChoice= []; // Setup for array that is the word to be guessed
var mysteryWord = "";
// var mysteryWord = ""; //Selects word from the word bank for user to guess
var userGuesses = []; // Array that houses incorrect letters guessed to be displayed on game screen
var wordBlanks = []; // Array that houses displayed blanks of wordchoice
var wins = 0;
var losses = 0;
var guesses = 10; // The amount of tries the contestant gets
var userText = document.getElementById("userText");// variable for user input



//******************************Javascript Functions to be called for gameplay ***********************************************************



function beginGame() {


  //Customizes game by inserting contestant's name
  document.getElementById("player").innerHTML;

  //Refreshes the contestant's amount of guesses each time the game starts
  guesses = 10;

  // Random word is chosen from word bank for contestant to solve
  wordChoice = wordBank[Math.floor(Math.random() * wordBank.length)];

  // Represents the word choice in string form
  mysteryWord = wordChoice[0];

  // Console log what the new word choice is for the contestant to solve
  console.log(wordChoice);


  // Refresh the array that holds the incorrect guesses of the contestant
  userGuesses = [];


  // Refreshes the array that houses the blanks that represent the mystery word
  wordBlanks = [];

  

  // Loop that fills the wordBlanks array with _ _ _ _ _ _ _ _ to represent mystery word chosen
  for (var i = 0; i < wordChoice.length; i++) {
    wordBlanks.push("_");
  }

  // Console log to see what blanks will be displayed to contestant
  console.log(wordBlanks);

  // Initializes list of incorrect user guesses
  document.getElementById("userGuesses").innerHTML =  userGuesses;

  // Displays the amount of available guesses to the contestant
  document.getElementById("guesses").innerHTML = guesses;

  // Displays the mystery word in "_ _ _ _ _ _ _" format to the Contestant
  document.getElementById("unknownWord").innerHTML = wordBlanks;


}




// This function compares the contestant's guess to the letters of mystery word
function verifyGuess(userTry) {


  // Compare the guessed letter to every indexed letter of Word Choice array
  for (var j = 0; j < wordBlanks.length; j++) {

    if (userTry === wordChoice[j] ) {

      // Set the index of wordBlanks equal to the letter that contestant guessed

      wordBlanks[j] = userText;

      console.log(wordBlanks); // Show in the console the status of wordblanks array

      document.getElementById("unknownWord").innerHTML= wordBlanks;
    }
  }


  // If the letter guessed is incorrect or does not match, the following will execute
  if (userTry !== wordChoice[j]) {

  // The contestant loses an available guess
    guesses--;

    // The Contestant's incorrect guess is sent to the user guess array
    userGuesses.push(userText);

    // Display the inccorrect guess to the user
    document.getElementById("userGuesses").innerHTML= userGuesses.join(" ");

  

  }

}




//This function executes instructions in the event that contestant has no 
//guesses remaining or was successful in guessing entire word correctly
function winOrLose() {

    // // First, log an initial status update in the console
    // // telling us how many wins, losses, and guesses are left.
    // console.log("WinCount: " + winCounter + " | LossCount: " + lossCounter + " | NumGuesses: " + numGuesses);
  
    // HTML UPDATES
    // ============
  
    // Update the HTML to reflect the new number of guesses.
    document.getElementById("guesses").innerHTML = guesses;
  
    // This will print the array of guesses and blanks onto the page.
    document.getElementById("unknownWord").innerHTML = wordBlanks;
  
    // This will print the wrong guesses onto the page.
    document.getElementById("userGuesses").innerHTML = userGuesses;
  
    // Comparing the updated wordblanks array to the wordChoice array
    //If the strings of each array are the same, then the codes below execute
    if (wordBlanks.toString() === wordChoice.toString()) {
  
     
      // Alerts Contestant with Congratulatory message
      alert("Congratulations, You have correctly guessed the Mystery Word!");


      // Increase contestant's wins column by 1
      wins++;

      // Display the updated number of wins to contestant
      document.getElementById("wins").innerHTML = wins;
  
      // Start another round of guessing for contestant
      beginGame();
    }
  
    // Condition when Contestant has no available guesses remaining
    else if (guesses === 0) {


      // Give the user an alert
      alert("Sorry, You have used all of your guesses... You Lose!");


      // Increase contestant loss column by 1
      losses++;
  
      
  
      // Display updated number of losses to contestant
      document.getElementById("losses").innerHTML = losses;
  
      // Starts another round of guessing
      beginGame();
  
    }
  
  }
  



  // ****************************ACTUAL GAME LOGIC*********************************************************
//*************************************************************************************************************** */

// Guessing game begins when this function is called
beginGame();

// Then initiates the function for capturing key clicks.
document.onkeyup = function(event) {
  
  userText.textContent = event.key;

  // Runs the code to check for correct guesses.
  verifyGuess(userText);

  // Runs the code that ends each round.
  winOrLose();
};