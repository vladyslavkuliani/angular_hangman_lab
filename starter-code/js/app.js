console.log('app.js loaded!');

// initialize the application
var app = angular.module("hangmanApp", []);

app.controller('HangmanCtrl', HangmanCtrl);

function HangmanCtrl(){
  console.log("in HangmanCtrl");
  var vm = this;
  var word = 'elephant';
  vm.hangman = new HangmanGame(word, word.length);
  vm.guessLetter = function(taco){
    vm.hangman.guess(taco);
    var input = document.getElementById('guess');
    input.value = "";
  }
}
