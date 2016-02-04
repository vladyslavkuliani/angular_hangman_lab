console.log('cookies');

var app = angular.module("hangmanApp", [])
  .controller('hangmanController', hangmanController);

function hangmanController() {
  var vm = this;
  console.log('hangmanController online');
  this.controllerWorks = 'ok';
  this.secretWord = 'elephant';
  this.completedWord = '________';
  this.guesses = [];
  this.triesRemaining = 7;
  this.guess = '';

  this.checkGuess = function() {
    var letter = this.guess;
    console.log('you guessed', letter);
    if (isLetterInWord(letter, this.secretWord)) {
      console.log('found ' + letter + ' in the word: ', this.secretWord);
    } else {
      this.triesRemaining--;
    }
    // note I would have liked this to use $watch but
    // http://stackoverflow.com/questions/24078535/angularjs-controller-as-syntax-and-watch#24078893
    updateCompletedWord(this.guess);
    checkGameStatus();
    this.guess='';
  };
  function checkGameStatus() {
    if(vm.triesRemaining === 0) {
      alert('YOU LOSE!!!!!!!!!!!!!!!!!!!!');
      return false;
    } else if( !isLetterInWord(/\_/, vm.completedWord) ) {
      alert('YOU WIN!!!!!!!!!!!!!!!!!!!!!!!!');
      return false;
    } else {
      console.log(vm.triesRemaining, ' tries remain');
      return true;
    }
  }

  function isLetterInWord(letter, word) {
    return ((word.search(letter) > -1) ? (true) : (false));
  }

  function updateCompletedWord(newLetter) {
    console.log(vm.guesses);
    vm.guesses.push(newLetter);
    console.log('guesses', vm.guesses, vm);

    var newSecretWord = '';
    for (var index in vm.secretWord) {
      var currentLetter = vm.secretWord[index];
      console.log('cL, vmg', currentLetter, vm.guesses);
      if(vm.guesses.indexOf(currentLetter) > -1) {
        console.log(newSecretWord);
        newSecretWord += currentLetter;
      } else {
        newSecretWord += '_';
      }
    }
    vm.completedWord = newSecretWord;
    console.log(vm.completedWord);
    console.log(vm);

  }

}
