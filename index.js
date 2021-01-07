let time = 4;
let currentscore = 0;
let play;
let high; 

const wordinput = document.querySelector('#word-input');
const currentword = document.querySelector('#current-word');
const scoredisplay = document.querySelector('#score');
const timedisplay = document.querySelector('#time');
const seconds = document.querySelector('#seconds');
const highscore = document.getElementById("highscore");
const end = document.getElementById("end");

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
  'establish',
  'hero',
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
  'habit',
  'use',
  'nice'
];

function gameover() 
{
  end.innerHTML = `<h1> Game Over !!</h1>
    <br>
    <h2>Your score is ${currentscore} </h2>
    <br>
    <button onclick="location.reload()">Play again</button>`;
  end.style.display = 'flex';
}

function countdown()
{
  if (time > 0) 
  {
    time--;
  } 
  else if (time === 0) 
  {
    gameover();
  }
  timedisplay.innerHTML = time;
}

function init() 
{
  seconds.innerHTML = 3;
  highscore.innerHTML = localStorage.getItem('high');
  wordinput.addEventListener('input', start);
  setInterval(countdown, 1000);
}

window.addEventListener('load', init);

function removeScore() 
{
  window.localStorage.clear()
  highscore.innerHTML = 0
}

function matchwords() 
{
  if (wordinput.value === currentword.innerHTML) 
  {
    return true;
  } 
  else 
  {
    return false;
  }
}

function showword(words) 
{
  const index = Math.floor(Math.random() * words.length);
  currentword.innerHTML = words[index];
}

function start() 
{
  if (matchwords()) 
  {
    play = true;
    time = 4;
    showword(words);
    wordinput.value = '';
    currentscore++;
    if (currentscore > localStorage.getItem('high', high)) 
    {
      localStorage.setItem('high',currentscore);
      highscore.innerHTML = localStorage.getItem('high');
    }
  }
  scoredisplay.innerHTML = currentscore;
  highscore.innerHTML = localStorage.getItem('high');
}






