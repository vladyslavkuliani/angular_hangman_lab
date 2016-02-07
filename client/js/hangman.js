console.log('hangmanGame loaded');
var HangmanGame = function(secretWord, tries) {
  this.secretWord = secretWord;
  this.guesses = [];
  this.triesRemaining = tries || 7;
  this.completedWord = this.wordSoFar();
  //this.wordSoFar();
};


// call hg.guess('f') to guess a letter and update the game status
HangmanGame.prototype.guess = function(newLetter) {
  console.log('you guessed', newLetter);
  if (this.isLetterInWord(newLetter, this.secretWord)) {
    console.log('found ' + newLetter + ' in the word: ', this.secretWord);
  } else {
    this.triesRemaining--;
  }
  this.guesses.push(newLetter);
  this.completedWord = this.wordSoFar();
  return this.checkGameWinStatus();
};

// wordSoFar returns the word completed up till now
HangmanGame.prototype.wordSoFar = function() {
  var newSecretWord = '';
  for (var index in this.secretWord) {
    var currentLetter = this.secretWord[index];
    if(this.guesses.indexOf(currentLetter) > -1) {
      newSecretWord += currentLetter;
    } else {
      newSecretWord += '_';
    }
  }
  this.completedWord = newSecretWord;
  return newSecretWord;
};

// determines win/lose/continue
HangmanGame.prototype.checkGameWinStatus = function() {
  if(this.triesRemaining === 0) {
    alert('YOU LOSE!!!!!!!!!!!!!!!!!!!!');
    return 'LOSE';
  } else if( !this.isLetterInWord('_', this.completedWord) ) {
    alert('YOU WIN!!!!!!!!!!!!!!!!!!!!!!!!');
    return 'WIN';
  } else {
    console.log(this.triesRemaining, ' tries remain');
    return 'CONTINUE';
  }
};

// returns true if the letter is in the word, false if not
HangmanGame.prototype.isLetterInWord = function(letter, word) {
  return ((word.split('').indexOf(letter) > -1) ? (true) : (false));
};
