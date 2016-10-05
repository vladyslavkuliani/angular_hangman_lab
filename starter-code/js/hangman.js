console.log('hangmanGame loaded');

// HangmanGame
// to use:
// 1. var game = new HangmanGame('supersecretword');
// 2. game.guess('t');
var HangmanGame = function(secretWord, tries) {
  this.secretWord = secretWord;
  this.input = "";
  this.guesses = [];
  this.triesRemaining = tries || 7;
  this.displayWord = this.filteredWord();
  this.gameOver = false;
  this.gameWon = null;
};

// user can guess a letter
HangmanGame.prototype.guess = function(guess) {
  // don't continue if the game is over
  if (this.gameOver) {
    console.log("the game is over");
    return false;
  }
  // check if the letter has already been guessed
  var alreadyGuessed = this.guesses.indexOf(guess) !== -1;
  if (alreadyGuessed) {
    console.log("this letter has already been guessed");
    return;
  }

  // add the guess letter to the list of guesses
  this.guesses.push(guess);

  if (this.isLetterInWord(guess, this.secretWord)) {
    // good guess
    console.log('found ' + guess + ' in the word: ', this.secretWord);
    // update display word
    this.displayWord = this.filteredWord();
  } else {
    // bad guess
    this.triesRemaining--;
  }

  this.checkForWinner();
  return;
};

//////////////////////
// Helper functions //
//////////////////////

// filteredWord returns the word completed up till now
HangmanGame.prototype.filteredWord = function() {
  var displayWord = '';
  for (var index in this.secretWord) {
    var currentLetter = this.secretWord[index];
    if(this.guesses.indexOf(currentLetter) > -1) {
      displayWord += currentLetter;
    } else {
      displayWord += '_';
    }
  }

  return displayWord;
};

// determines win/lose status
HangmanGame.prototype.checkForWinner = function() {
  if(this.triesRemaining === 0) {
    console.log("Sorry, you loose.")
    this.gameOver = true;
    this.gameWon = false;
  // user wins if there are no more underscores in word
  } else if( !this.isLetterInWord("_", this.displayWord) ) {
    console.log("Yay, you win!")
    this.gameOver = true;
    this.gameWon = true;
  }
};

// returns true if the letter is in the word, false if not
HangmanGame.prototype.isLetterInWord = function(guess, word) {
  // determine if the letter is in the word
  return word.split('').indexOf(guess) > -1;
};
