<!---
  market: SF,
  credit: https://github.com/SF-WDI-LABS/angular_hangman_lab
-->

# <img src="https://cloud.githubusercontent.com/assets/7833470/10899314/63829980-8188-11e5-8cdd-4ded5bcb6e36.png" height="60"> 

#ngHangman

<pre>
_________
|/      |                               _
|      (_)       __ _ _ __   __ _ _   _| | __ _ _ __
|      \|/      / _` | '_ \ / _` | | | | |/ _` | '__|
|       |      | (_| | | | | (_| | |_| | | (_| | |
|      / \      \__,_|_| |_|\__, |\__,_|_|\__,_|_|
|                           |___/
|___                                        hang-man
</pre>

### Why is this important?
<!-- framing the "why" in big-picture/real world examples -->
*This workshop is important because:*

This workshop is a chance to use the skills you've developed so far and play with angular. We'll be making an in-browser [hang-man game](https://en.wikipedia.org/wiki/Hangman_(game)).

### What are the objectives?
<!-- specific/measurable goal for students to achieve -->
*After this workshop, developers will be able to:*

 * Get user input with `ng-model`
 * Organize code with `ng-controller`
 * Visualize a collection with `ng-repeat`
 * Fire an event with `ng-change`

### Where should we be now?
<!-- call out the skills that are prerequisites -->
*Before this workshop, developers should already be able to:*

* Use Angular at a basic level

## Mockup of End Result

![screenshot](./imgs/sample-solution.png)

## Setup

1. clone this repo (or fork & clone)
1. open index.html and app.js
1. open hangman.js and read it's contents

Most of the game code itself has been given to you.  Let's check it out using dev tools.
Open index.html and in the browser console try the following:

```js
hangman = new HangmanGame('test');
```
You should have a new instance of a game. Now try running:

```js
hangman.guess('x');
hangman.guess('t');
hangman.isWinner();
```

Note what is returned, and what changes on `hangman`.  You'll use this inside your angular controller.


### Step 1: Initialization
Let's get angular setup in our app.

* `bower install` your front-end assets
* add `ng-app` in the appropriate location and set it equal to your "hangmanApp"
* register a new controller with your application called "hangmanCtrl" and use it in the view

### Step 2: Game Properties

* in the controller instantiate a new game instance, `new HangmanGame('elephant')`, and pass it to the view
* a `HangmanGame` instance provides `guesses`, `completedWord` and `triesRemaining` properties.
Add these in the appropriate parts of the html using expressions to get the values from the hangmanGame to display on the page.
  * Hint: You might not be able to see the guesses until you make some.  We don't have
  an interface for that yet, but we can add a couple of guesses right in the controller. You can try calling `.guess('f')` on your game instance inside the controller.  `console.log as needed`.
  * Note: `completedWord` is a string containing guessed characters that match, in their
    correct positions.  E.g. if you guessed 'b' and 'r' for 'rabbit', it shows: 'r_bb__'


### Step 3: User Input

* autofocus to the input field
* use `ng-model` to track the input field's value
* use `ng-change` to call a function when the input changes and pass in the input's value
  * write a helper function in your controller that is passed into the view, i.e. `guessLetter`.
  * the input should be cleared after each character is typed

### Step 4: Win State

* add the class "glyphicon-ok" to the span with class "glyphicon" if the game is won
* add the class "glyphicon-remove" to the span with class "glyphicon" if the game is lost

### Step 5: Looking Good

The guesses on the page is kinda ugly. Let's fix it.

* change the list of guesses to display using `ng-repeat`
* improve the looks of anything else as desired

### Step 6: More User Stories (Bonus)

Accomplish the following features on your own or in a pair. User can...

* enter an uppercase word that's treated as a lower case word
* be challenged with a random word from a list of words
* restart the game after win/lose
* keep score of games won and lost
* see a drawing of the hangman as the game progresses (extra bonus)

