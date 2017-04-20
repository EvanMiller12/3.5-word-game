(function() {
  'use strict';

  //returns new array of words with char greater than 3
  var threePlusChar = commonWords.filter(function(word) {
    if (word.length > 3){
      return word;
    }
  });

  //picks random word from threePlusChar array
  function pickRandomWord(){
    var randWord = threePlusChar[Math.floor(Math.random() * threePlusChar.length)];

    return randWord;
  }

  var currentWord = pickRandomWord();
  console.log(currentWord)
  var currentWordArray = currentWord.split('');
  var password = new Array(currentWordArray.length)
  var guessTotal = 0;

  for (var i = 0; i < password.length; i++) {
    password[i] = "_" + " ";
  }

  function hideLetters() {
    for (var i = 0; i < password.length; i++){
      var guessField = document.getElementById("guess-field");
      var underscores = document.createTextNode(password[i]);
      guessField.appendChild(underscores);
    }
  }

  var checkGuess = function() {
    var guessedLetter = document.querySelector(".guessed-letter").value;
    guessedLetter = guessedLetter.toLowerCase();
    for (var i = 0; i < currentWordArray.length; i++) {
      if (currentWordArray[i] === guessedLetter) {
        password[i] = guessedLetter + " ";
        var correct = true;
      }
      document.querySelector(".guessed-letter").value = "";
    }

    var guessField = document.getElementById("guess-field");
    guessField.innerHTML = "";
    hideLetters();

    if(!correct) {
      var guessedLetters = document.getElementById("guessed-letters");
      var letter = document.createTextNode(" " + guessedLetter);
      guessedLetters.appendChild(letter);
      guessTotal++
      var hangman = document.querySelector(".hangman-scaffold");
      hangman.src = "http://www.writteninpencil.de/Projekte/Hangman/hangman" + guessTotal + ".png";
    }

    var gameOver = true;
    for (var i = 0; i < password.length; i++) {
      if (password[i] === "_" + " ") {
          gameOver = false;
      }
    }

    if(gameOver){
      alert("You Win!")
    }

    if(guessTotal === 8){
      alert("Game Over!")
    }
  }

  function startGame() {
    hideLetters();
  }

  startGame();

  //hook up event listener to get guess and change the guess total
  document.getElementById('guess-button').addEventListener('click', function() {
    checkGuess();
  });

})();
