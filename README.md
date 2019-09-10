# Word-Guess-Game

# About the Project
 
The project is a Word Guess Type of Game that takes the input of a user and compares to a "Mystery Word"
to see if the user can guess it correctly. 



# What is used to accomplish this

1. HTML file (Index.html) provides the framework for the game. within the code, columns/rows have been used as well as containers
so as to organize the different sections of the site housing the game. There are also calls to CSS and JS as well as bootstrap

2. BootStrap- The html utilizes the bootstrap framework for a few features, such as the "jumbotron" message board feature and the 
grid format available from bootstrap

3. CSS- included is a custom CSS file to add even more design to the project

4. JS- Javascript basically houses the game logic. Here key events, functions, and loops were utilized to establish the environment
of the game as well as live feedback of updated information to the game screen



# How the game works

1. Upon loading, contestant is asked for their name
2. User is welcomed by the game and is prompted and the first mystery word appears in "_ _ _ _ _ _ _ _ " format
3. The user is set up with 10 attempts or guesses at the word
4. As correct letters are guessed, they replace the appropriate "_" place marker
5. All incorrect guesses are accumulated and shown to the user as an aid of which letters are not in word
6. With each correct guess, the user does not lose a guess attempt
7. However, for each wrong letter guess, an available guess attempt is subtracted
8. If the user is able to guess the word without using all allotted attempts, they win
9. However, if the alloted amount of guesses are used before the word is solved, the user loses.
10. For win or loss the stat is updated for the user's reference
11. Once round is over (win or loss) The game starts a new round with a new word to be guessed




# Theme

---> The theme is Wheel of Jeopardy

*** This theme is a mashup of popular trivia shows Wheel of Fortune and Jeopardy

*** Gameplay will feature familiar sound affects that are known from these programs



# Possible Future Features

1. Larger word bank or sentence bank. 
2. Wheel aspect where user can spin for a prize amount to be assign for each letter
3. randomizer aspect (like in jeopardy) where words are shuffled under different categories for different cash values
4. Difficulty modes (Easy, Medium, Difficult, Genius)
5. Multiplayer options 