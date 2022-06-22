//Variables from html file
const title = document.getElementById('title');
const character = document.getElementById('character');
const character2 = document.getElementById('character2'); 
const question = document.getElementById('question');

//functions that do things
function changeColor () {
 title.style.backgroundColor = 'blue';
 title.style.color = 'white'
};

function returnColor () {
  title.style.backgroundColor = 'pink';
  title.style.color = 'white';
};

//Chose which problem you want to work on
const number = [3, 4, 1, 5, 6, 7, 9, 8, 10, 2]
let problem = 3;

function generateQuestion(number) {
  const randInt = Math.ceil(Math.random()* number.length)  
  return number[randInt]
};

function refreshQuestion() {
  const number1 = generateQuestion(number)
  question.innerHTML = `${number1} + ${problem} =`;
}

function increaseLevel() {
  problem ++
}

//event listeners that trigger functions
title.onmousedown = changeColor;
title.onmouseup = returnColor;
character.onmousedown = refreshQuestion;
title.onclick = increaseLevel;
