console.log('app.js loaded!');

angular.module("hangmanApp", []);

function hangmanController() {
  console.log('hangmanController online');
  this.controllerWorks = true;
}
