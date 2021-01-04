window.addEventListener('load', init);


const levels = {
  easy: 5,
  medium: 3,
  hard: 1
};


const currentLevel = levels.medium;

let time = currentLevel;
let currentscore = 0;
let play;
let high;
let sel;

const wordInput = document.querySelector('#word-input');
const currentWord = document.querySelector('#current-word');
const scoreDisplay = document.querySelector('#score');
const timeDisplay = document.querySelector('#time');
const message = document.querySelector('#message');
const seconds = document.querySelector('#seconds');
const highscore = document.getElementById("highscore");


const words = [
  'hat',
  'river',
  'lucky',
  'statue',
  'generate',
  'designer',
  'programmer',
  'runaway',
  'intelligent',
  'developer',
  'establishment',
  'hero',
  'javascript',
  'involvement',
  'echo',
  'children',
  'investigate',
  'dangerous',
  'delhi',
  'symptom',
  'laughter',
  'magic',
  'master',
  'space',
  'important',
  'good',
  'html',
  'use',

];


function init() {
 
  seconds.innerHTML = currentLevel;
  
  highscore.innerHTML = localStorage.getItem('high');
  
  wordInput.addEventListener('input', startMatch);
  
  
}

function startGame(button) {
  if(button.innerHTML == "Exit Game"){
    document.location.reload()
  } else {
    button.innerHTML = "Exit Game"
    setInterval(countdown, 1000);
    // Check game status
    setInterval(checkStatus, 50);
  }
}

function removeScore() {
  window.localStorage.clear()
  highscore.innerHTML = 0
}


function startMatch() {
  if (matchWords()) {
    play = true;
    time = currentLevel + 1;
    showword(words);
    wordInput.value = '';
    currentscore++;
    if (currentscore > localStorage.getItem('high', high)) {
      localStorage.setItem('high',currentscore)
      highscore.innerHTML = localStorage.getItem('high')
  }
}
  
  
scoreDisplay.innerHTML = currentscore;
highscore.innerHTML = localStorage.getItem('high')
}


function matchWords() {
  if (wordInput.value === currentWord.innerHTML) {
    message.innerHTML = 'Correct!!!';
    return true;
  } else {
    message.innerHTML = '';
    return false;
  }
}


function showword(words) {
 
  const randIndex = Math.floor(Math.random() * words.length);
  
  currentWord.innerHTML = words[randIndex];
}


function countdown() {
  
  if (time > 0) {
   
    time--;
  } else if (time === 0) {
   
    play = false;
    document.getElementById("startgame").innerHTML = "Start Game";
    document.location.reload();
  }
  
  timeDisplay.innerHTML = time;
}


function checkStatus() {
  if (!play && time === 0) {
    message.innerHTML = 'Game Over!!!';
    score = 0;
    scoreDisplay.innerHTML = 0;
  }
}