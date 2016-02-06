console.log('cookies');

var app = angular.module("hangmanApp", [])
  .controller('hangmanController', hangmanController);

function hangmanController() {
  var vm = this;
  console.log('hangmanController online');
  this.controllerWorks = 'ok';
  this.secretWord = 'elephant';
  this.guesses = [];
  this.completedWord = updateCompletedWord();
  this.triesRemaining = 7;
  this.guess = '';

  this.checkGuess = function() {
    var newLetter = this.guess;
    console.log('you guessed', newLetter);
    if (isLetterInWord(newLetter, this.secretWord)) {
      console.log('found ' + newLetter + ' in the word: ', this.secretWord);
    } else {
      this.triesRemaining--;
    }
    // note I would have liked this to use $watch but
    // http://stackoverflow.com/questions/24078535/angularjs-controller-as-syntax-and-watch#24078893
    vm.guesses.push(newLetter);
    // update the completedWord
    updateCompletedWord();
    checkGameWinStatus();
    this.guess='';
  };
  function checkGameWinStatus() {
    if(vm.triesRemaining === 0) {
      alert('YOU LOSE!!!!!!!!!!!!!!!!!!!!');
      return false;
    } else if( !isLetterInWord('_', vm.completedWord) ) {
      alert('YOU WIN!!!!!!!!!!!!!!!!!!!!!!!!');
      return false;
    } else {
      console.log(vm.triesRemaining, ' tries remain');
      return true;
    }
  }

  // checks if the letter you passed is in the word
  // returns true or false
  function isLetterInWord(letter, word) {
    return ((word.split('').indexOf(letter) > -1) ? (true) : (false));
  }

  function updateCompletedWord() {
    var newSecretWord = '';
    for (var index in vm.secretWord) {
      var currentLetter = vm.secretWord[index];
      if(vm.guesses.indexOf(currentLetter) > -1) {
        newSecretWord += currentLetter;
      } else {
        newSecretWord += '_';
      }
    }
    vm.completedWord = newSecretWord;
    return newSecretWord;
  }

}
