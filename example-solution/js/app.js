// Sanity check
console.log('app.js loaded!');

// App
angular
  .module("hangmanApp", [])
  .controller("HangmanController", HangmanController);

// Controllers

function HangmanController() {
  var vm = this;
  // initialize a new game
  vm.hangman = new HangmanGame("elephant");
  // helper function for the view
  vm.guessLetter = function(input) {
    // guess the letter
    vm.hangman.guess(input);
    // clear the input
    vm.hangman.input = "";
  }
}
