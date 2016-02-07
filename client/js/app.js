console.log('app.js loaded!');

var app = angular.module("hangmanApp", [])
  .controller('hangmanController', hangmanController);


  function hangmanController() {
    var vm = this;
    console.log('hangmanController online');
    this.controllerWorks = 'ok';
    this.game = new HangmanGame('elephant');
    this.guess = '';
    this.checkGuess = checkGuess;

    // define functions separately to keep code easy to read
    // this function sends the new guess to the hangmanGame which updates accordingly
    // it then clears the input field
    function checkGuess() {
      var guess = this.guess;
      var result = this.game.guess(guess);
      if (result === 'WIN') {
        alert('you win!');
      } else if(result === 'LOSE') {
        alert("oh no! you lost (◕︵◕)");
      } // else we continue playing
      this.guess = '';
    }
  }


// Alternate solution using multiple primitives/scalars for the view.  Note how in this case,
// we explicitly update properties on the controller.  These are copies, from the
// game and so won't update on their own, (outside of angular bindings).
// Note also that when using this syntax index.html should be updated to reference
//   these properties directly: e.g. use hangman.guesses rather than hangman.game.guesses
/*
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
    var guess = this.guess;
    game.guess(guess);
    updateState();
  }
  //copies primitives
  function updateState() {
    vm.completedWord = game.completedWord;
    vm.triesRemaining = game.triesRemaining;
    vm.guess = '';
  }

}
*/
