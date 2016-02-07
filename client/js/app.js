console.log('cookies');

var app = angular.module("hangmanApp", [])
  .controller('hangmanController', hangmanController);

function hangmanController() {
  var vm = this;
  console.log('hangmanController online');
  this.controllerWorks = 'ok';
  var game = new HangmanGame('elephant');
  this.guesses = game.guesses;
  this.completedWord = game.completedWord;
  this.triesRemaining = game.triesRemaining;
  this.guess = '';
  this.checkGuess = checkGuess;

  // define functions separately to keep code easy to read
  // this function sends the new guess to the hangmanGame which updates accordingly
  // it then clears the input field
  function checkGuess() {
    // console.log('this', this);
    // console.log('vm', vm);
    var guess = this.guess;
    game.guess(guess);
    updateState();
  }
  //updates the scalar values with the values from the game
  function updateState() {
    vm.completedWord = game.completedWord;
    vm.triesRemaining = game.triesRemaining;
    vm.guess = '';
  }


}
