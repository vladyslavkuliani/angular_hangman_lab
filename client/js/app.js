console.log('app.js loaded!');

var app = angular.module("hangmanApp", []);

function hangmanController() {
  console.log('hangmanController online');
  this.controllerWorks = true;
}
