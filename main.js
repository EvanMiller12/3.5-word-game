(function() {
  'use strict';

var randomWordsContainer = document.querySelector('.random-word-container');
var guesses = document.querySelector('.guesses');
var numGuesses = document.getElementById("numGuesses");
var guess = document.querySelector('.guess');
var guessButton = document.getElementById('guessButton');


//pic a random word with 3 plus characters

//filters through common words array
  var threePlusChar = commonWords.filter(function(word) {
//returns new array of words with char greater than 3
    if(word.length > 3){
      return word;
    }
  });
//picks random word from threePlusChar array
  function pickRandomWord(){
    var randWord = threePlusChar[Math.floor(Math.random() * threePlusChar.length)];

    return randWord;//returns randWord to function
}
  var randomWord = pickRandomWord();
  console.log(randomWord);

// display underscore for each char in chosen randword
   function underscoreDisplay (){
     for(var i = 0; i < randomWord.length; i++){
      var underscore = document.createElement('span'); //creates a span tag for each character in random word
      underscore.textContent = '_'; //replace each char w/ _
      randomWordsContainer.appendChild(underscore); //selects underscores class and sends each span tag to dom to put underscores in
    }
  }
  console.log(underscoreDisplay());

//display number of turns remaining
var guessTotal = 8;
function guessesRemaining() {
  guessTotal -= 1;//counts guess total down by 1
  numGuesses.textContent = guessTotal; //sets text content of num-guesses to guessTotal
//when total guesses  is zero, selects guesses text content and displays game over
    if(guessTotal == 0) {
      guesses.textContent = "GAME OVER!";
    }
}

//hook up event listener to get guess and change the guess total
guessButton.addEventListener('click', function() {
  guessesRemaining();//calls guessesRemaining function to decrease guess total
});

})();
