var elementIntro = document.getElementById("intro");
var elementQuiz = document.getElementById("quiz");
var elementResults = document.getElementById("result");
let btn = document.getElementById("btn");
const submitbtn = document.getElementById("submit");
const resetbtn = document.getElementById("reset");
elementQuiz.style.display = "none";
elementResults.style.display = "none";


resetbtn.addEventListener('click', function(){
  window.location.reload();
  return false;
});


btn.onclick = function showQuiz() {
    elementQuiz.style.display = "block";
    elementIntro.style.display = "none";
};


submitbtn.onclick = function submitResults() {
  elementQuiz.style.display = "none";
  elementIntro.style.display = "none";
  elementResults.style.display = "block";
};


let mapVar = L.map('map2').setView([-19.704684, -59.429373], 3.4);
  L.tileLayer('https://api.mapbox.com/styles/v1/micaleiva1/clb1hq2p8000314mjjwoj5h2t/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoibWljYWxlaXZhMSIsImEiOiJjbGFsazYzazgwNjZhM29xYzg2djRpdWV0In0.mI9xq8pXSbYhFTvax_TOmA', {
      maxZoom: 18,
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
  }).addTo(mapVar);

  for (let i = 0; i < places.length; i++) {
    L.marker([places[i].latitude, places[i].longitude])
    .bindPopup('<h3>' + places[i].placeName + '</h3>' + '<p>' + places[i].description + '</p>')
    .addTo(mapVar);
  }


  let brazilWinner = document.getElementById("brazilWinner");
  brazilWinner.style.display = "none";
  let argentinaWinner = document.getElementById("argentinaWinner");
  argentinaWinner.style.display = "none";
  let chileWinner = document.getElementById("chileWinner");
  chileWinner.style.display = "none";
  let uruguayWinner = document.getElementById("uruguayWinner");
  uruguayWinner.style.display = "none";
  let peruWinner = document.getElementById("peruWinner");
  peruWinner.style.display = "none";
  let boliviaWinner = document.getElementById("boliviaWinner");
  boliviaWinner.style.display = "none";
  let ecuadorWinner = document.getElementById("ecuadorWinner");
  ecuadorWinner.style.display = "none";
  let colombiaWinner = document.getElementById("colombiaWinner");
  colombiaWinner.style.display = "none";
  let venezuelaWinner = document.getElementById("venezuelaWinner");
  venezuelaWinner.style.display = "none";
  let paraguayWinner = document.getElementById("paraguayWinner");
  paraguayWinner.style.display = "none";



var questionCount = 0;
var result1Score = 0;
var result2Score = 0;
var result3Score = 0;
var result4Score = 0;

var resultVar = document.getElementById("result");

//first question
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");
//second question
var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");
//third question
var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");
//fourth question
var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");
//fifth question
var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
//sixth question
var q6a1 = document.getElementById("q6a1");
var q6a2 = document.getElementById("q6a2");
var q6a3 = document.getElementById("q6a3");
//seventh question
var q7a1 = document.getElementById("q7a1");
var q7a2 = document.getElementById("q7a2");
var q7a3 = document.getElementById("q7a3");
//eigth question
var q8a1 = document.getElementById("q8a1");
var q8a2 = document.getElementById("q8a2");
var q8a3 = document.getElementById("q8a3");
var q8a4 = document.getElementById("q8a4");
//ninth question
var q9a1 = document.getElementById("q9a1");
var q9a2 = document.getElementById("q9a2");
var q9a3 = document.getElementById("q9a3");
var q9a4 = document.getElementById("q9a4");


q1a1.addEventListener("click", result1);
q1a2.addEventListener("click", result2);
q1a3.addEventListener("click", result3);
q1a4.addEventListener("click", result4);

q2a1.addEventListener("click", result1);
q2a2.addEventListener("click", result2);
q2a3.addEventListener("click", result3);
q2a4.addEventListener("click", result4);

q3a1.addEventListener("click", result1);
q3a2.addEventListener("click", result2);
q3a3.addEventListener("click", result3);
q3a4.addEventListener("click", result4);

q4a1.addEventListener("click", result1);
q4a2.addEventListener("click", result2);
q4a3.addEventListener("click", result3);
q4a4.addEventListener("click", result4);

q5a1.addEventListener("click", result1);
q5a2.addEventListener("click", result2);
q5a3.addEventListener("click", result3);

q6a1.addEventListener("click", result1);
q6a2.addEventListener("click", result2);
q6a3.addEventListener("click", result3);

q7a1.addEventListener("click", result1);
q7a2.addEventListener("click", result2);
q7a3.addEventListener("click", result3);

q8a1.addEventListener("click", result1);
q8a2.addEventListener("click", result2);
q8a3.addEventListener("click", result3);
q8a4.addEventListener("click", result4);

q9a1.addEventListener("click", result1);
q9a2.addEventListener("click", result2);
q9a3.addEventListener("click", result3);
q9a4.addEventListener("click", result4);



function result1() {
  result1Score++, questionCount++;
  if (questionCount >= 9) {
    showResult();
  }
}

function result2() {
  result2Score++, questionCount++;
  if (questionCount >= 9) {
    showResult();
  }
}

function result3() {
  result3Score++, questionCount++;
  if (questionCount >= 9) {
    showResult();
  }
}

function result4() {
  result4Score++, questionCount++;
  if (questionCount >= 9) {
    showResult();
  }
}


function showResult() {
  if (result1Score >= 3) {
    brazilWinner.style.display = "block";
  }
  else if (result2Score > 3) {
    argentinaWinner.style.display = "block";
  }
  else if (result3Score >3) {
    chileWinner.style.display = "block";
  }
  else if (result4Score > 3) {
    uruguayWinner.style.display = "block";
  }
  else if (result1Score >=2) {
    peruWinner.style.display = "block";
  }
  else if (result2Score >= 2) {
    boliviaWinner.style.display = "block";
  }
  else if (result3Score >= 2) {
    ecuadorWinner.style.display = "block";
  }
  else if (result4Score >= 2) {
    colombiaWinner.style.display = "block";
  }
  else if (result4Score >= 2) {
    venezuelaWinner.style.display = "block";
  }
  else {
    paraguayWinner.style.display = "block";
  }
}

/*
var argentina = 0;
var buenosAires = document.querySelectorAll('.argentina');
var brazil = 0;
var rio = document.querySelectorAll('.brazil');
var colombia = 0;
var cartagena = document.querySelectorAll('.colombia');
var peru = 0;
var machuPichu = document.querySelectorAll('.peru');
var chile = 0;
var santiago = document.querySelectorAll('.chile');
var ecuador = 0;
var quito = document.querySelectorAll('.ecuador');
var venezuela = 0;
var caracas = document.querySelectorAll('.venezuela');
var uruguay = 0;
var montevideo = document.querySelectorAll('.uruguay');
var bolivia = 0;
var laPaz = document.querySelectorAll('.bolivia');
var paraguay = 0;
var asuncion = document.querySelectorAll('.paraguay');




function addResults() {
  argentinaFunc();
  brazilFunc();
  ecuadorFunc();
  peruFunc();
  boliviaFunc();
  paraguayFunc();
  colombiaFunc();
  venezuelaFunc();
  uruguayFunc();
  chileFunc();
}

if (div.classList.contains("foo")) {  // instructions }

function argentinaFunc(){
  if (buenosAires.onclick) {
    argentina += 1;
   }
 }

 function brazilFunc(){
   if (rio.onclick) {
     brazil += 1;
    }
  }

 function ecuadorFunc(){
   if (quito.onclick) {
      ecuador += 1;
    }
  }

  function peruFunc(){
     if (machuPichu.onclick) {
       peru += 1;
    }
  }

  function boliviaFunc(){
     if (laPaz.onclick) {
        bolivia += 1;
    }
  }

  function paraguayFunc(){
      if (asuncion.onclick) {
          paraguay += 1;
    }
  }

  function colombiaFunc(){
      if (cartagena.onclick) {
        colombia += 1;
    }
  }

  function venezuelaFunc(){
    if (caracas.onclick) {
        venezuela += 1;
     }
   }

  function uruguayFunc(){
    if (montevideo.onclick) {
        uruguay += 1;
    }
  }

  function chileFunc(){
    if (santiago.onclick) {
        chile += 1;
    }
  }


  function displayResults() {
    let winner = Math.max(argentina, brazil, colombia, peru, chile, ecuador, venezuela, uruguay, bolivia, paraguay);
    console.log(winner);
  }
*/

/*
let message = "";
let notDone = 0;
let done = 0;
let total = 0;
let answerList = [];

let argentina = 0;
const buenosAires = document.querySelector('#buenos aires');
let brazil = 0;
const rio = document.querySelector('#rio de janeiro');
let colombia = 0;
const cartagena = document.querySelector('#cartagena');
let peru = 0;
const machuPichu = document.querySelector('#machu pichu');
let chile = 0;
const santiago = document.querySelector('#santiago');
let ecuador = 0;
const quito = document.querySelector('#quito');
let venezuela = 0;
const caracas = document.querySelector('#caracas');
let uruguay = 0;
const montevideo = document.querySelector('#montevideo');
let bolivia = 0;
const laPaz = document.querySelector('#la paz');
let paraguay = 0;
const asuncion = document.querySelector('#asuncion');


// make all the answer buttons work
const anyButton = document.querySelectorAll('#answer-buttons .butt');
anyButton.forEach(function(e) {
  // run the function named main on click
  e.addEventListener('click', main);
});
// this is the Start or Next button only
const singleButton = document.querySelector('#other-buttons .butt');
// run the function named control on click
singleButton.addEventListener('click', control);


// this runs when any answer button is clicked
function main() {
  if (done !== total) {
  	if (this.textContent === questions[done].answer) {
    	// answer is correct
      score++;
      message = "Correct!";
    }
    else {
    	// answer is wrong
      message = "Sorry, the correct answer was: " + questions[done].answer;
    }
    done++
    notDone--;
    document.querySelector("#other-buttons").classList.remove('hide');
		document.querySelector("#answer-buttons").classList.add('hide');
    writeResults();
  }
}

// for the Start and Next button
function control() {
  if (done !== total) {
    document.querySelector("#other-buttons .butt").textContent = "Next";
    document.querySelector("#answer-buttons").classList.remove('hide');
    loadNewQuestion();
  }
  else {
  	message = "You're all done! Thanks for playing!";
  }
  document.querySelector("#other-buttons").classList.add('hide');
  writeResults();
}

// get question and answers from the array named questions
function loadNewQuestion() {
  message = questions[done].question;
  answerList = [questions[done].answer,
    questions[done].wrong_answer_1,
    questions[done].wrong_answer_2];
  answerList = shuffle(answerList);
}

function writeResults() {
  document.querySelector("#narration").textContent = message;
  document.querySelector("#score").textContent = score;
  document.querySelector("#notDone").textContent = notDone;
  document.querySelector("#done").textContent = done;
  // use current contents of answerList to write text
  // into the buttons
  for (let i = 0; i < answerList.length; i++) {
    anyButton[i].textContent = answerList[i];
  }
}

// shuffle all items in an array
function shuffle(sourceArray) {
  for (let i = 0; i < sourceArray.length - 1; i++) {
    let j = i + Math.floor(Math.random() * (sourceArray.length - i));
    let temp = sourceArray[j];
    sourceArray[j] = sourceArray[i];
    sourceArray[i] = temp;
  }
  return sourceArray;
}

setup();

const submitButton = document.querySelector('#submit');
*/

/*
const questions = [
  {
    "question": "First things first, which one of these cities sound the most appealing to you?",
    "answer1": "Buenos Aires",
    "answer1Total": "1",
    "answer2": "La Paz",
    "answer2Total": "2",
    "answer3": "Rio de Janeiro",
    "answer3Total": "3",
    "answer4": "Santiago",
    "answer4Total": "4",
    "answer5":"Cartagena",
    "answer5Total": "5",
    "answer6": "Quito",
    "answer6Total": "6",
    "answer7": "Asuncion",
    "answer7Total": "7",
    "answer8": "Machu Pichu",
    "answer8Total": "8",
    "answer9": "Montevideo",
    "answer9Total": "9",
    "answer10": "Caracas",
    "answer10Total": "10"
  },
  {
    "question": "Which of the following sound more appealing to you? (choose only one)",
    "answer1": "The beach",
    "answer1Total": "3",
    "answer2": "A big city",
    "answer2Total": "1",
    "answer3": "Countryside",
    "answer3Total": "6",
    "answer4": "The mountains",
    "answer4Total": "4"
  },
  {
    "question": "Which food would you rather eat right now? (choose only one)",
    "answer1": "Ceviche",
    "answer1Total": "8",
    "answer2": "Arepas",
    "answer2Total": "10",
    "answer3": "Pan de Bono",
    "answer3Total": "5",
    "answer4": "Asado",
    "answer4Total": "8"
  },
  {
    "question": "Which European city do you like the most?",
    "answer1": "Paris, France",
    "answer1Total": "1",
    "answer2": "Istambul, Turkey",
    "answer2Total": "7",
    "answer3": "Athens, Greece",
    "answer3Total": "8",
    "answer4": "Alemería, Spain",
    "answer4Total": "4"
  },
  {
    "question": "Do you like crowded cities?",
    "answer1": "Yes, I love people!",
    "answer1Total": "3",
    "answer2": "I tolerate people every once in a while",
    "answer2Total": "8",
    "answer3": "I don't usually like being in crowded areas",
    "answer3Total": "10",
    "answer4": "No, I'd rather be in empty spaces",
    "answer4Total": "9"
  },
  {
    "question": "Do you speak spanish?",
    "answer1": "Yes, I'm pretty much fluent!",
    "answer1Total": "3",
    "answer2": "I know some spanish, but I'm still trying to learn!",
    "answer2Total": "5",
    "answer3": "I know just enough to get by",
    "answer3Total": "9",
    "answer4": "I don't know spanish, but I'd love to learn!",
    "answer4Total": "6"
  },
  {
    "question": "Do you usually drink coffee?",
    "answer1": "Yes, I love coffee! I couldn't live without it",
    "answer1Total": "5",
    "answer2": "I like coffee, but I don't drink it everyday",
    "answer2Total": "10",
    "answer3": "I drink coffee every once in a while",
    "answer3Total": "2",
    "answer4": "Not really",
    "answer4Total": "4"
  },
  {
    "question": "Assuming you are from the U.S., can you tolerate long flights?",
    "answer1": "Yes, I really enjoy flights since they are one of the best parts of the trip!",
    "answer1Total": "7",
    "answer2": "I don't really care as long as the destination is worth it",
    "answer2Total": "1",
    "answer3": "I'd rather take a shorter flight but I don't mind",
    "answer3Total": "5",
    "answer4": "I can't be on a plane for more than a couple hours",
    "answer4Total": "10"
  },
  {
    "question": "What's your ideal weather?",
    "answer1": "I want the best of both worlds, I can't decide",
    "answer1Total": "1",
    "answer2": "I can't stand hot weather, I'd rather go somewhere it doesn't get too hot",
    "answer2Total": "4",
    "answer3": "I really don't like cold weather, I'd rather go somewhere it doesn't get too cold",
    "answer3Total": "10",
    "answer4": "I'd like somewhere where it doesn't get to cold or too hot",
    "answer4Total": "9"
  },
  {
    "question": "Last but not least, why would you want to visit South America? (choose only one)",
    "answer1": "The people",
    "answer1Total": "7",
    "answer2": "The food",
    "answer2Total": "8",
    "answer3": "It's landscapes",
    "answer3Total": "2",
    "answer4": "The different cultures",
    "answer4Total": "5"
  }
]

let currentQuestion = 0;
let score = [];
let selectedAnswersData = [];
const totalQuestions = questions.length;

const container = document.querySelector('.quiz');
const questionEl = document.querySelector('.question');
const option1 = document.querySelector('.option1');
const option2 = document.querySelector('.option2');
const option3 = document.querySelector('.option3');
const option4 = document.querySelector('.option4');
const nextButton = document.querySelector('.next');
const previousButton = document.querySelector('.previous');
const restartButton = document.querySelector('.restart');
const result = document.querySelector('.result');


//Function to generate question
function generateQuestions (index) {
    //Select each question by passing it a particular index
    const question = questions[index];
    const option1Total = questions[index].answer1Total;
    const option2Total = questions[index].answer2Total;
    const option3Total = questions[index].answer3Total;
    const option4Total = questions[index].answer4Total;

    //Populate html elements
    questionEl.innerHTML = `${index + 1}. ${question.question}`
    option1.setAttribute('data-total', `${option1Total}`);
    option2.setAttribute('data-total', `${option2Total}`);
    option3.setAttribute('data-total', `${option3Total}`);
    option4.setAttribute('data-total', `${option4Total}`);
    option1.innerHTML = `${question.answer1}`
    option2.innerHTML = `${question.answer2}`
    option3.innerHTML = `${question.answer3}`
    option4.innerHTML = `${question.answer4}`
}

function loadNextQuestion () {
   const selectedOption = document.querySelector('input[type="radio"]:checked');
   if (!selectedOption) {
     console.log('Please select an answer');
     return;
   }
   const answerScore = Number(selectedOption.nextElementSibling.getAttribute('data-total'));

   score.push(answerScore);

   selectedAnswerData.push();

   const totalScore = score.reduce((total, currentNum) => total + currentNum);

   currentQuestion++;

   selectedOption.checked = false;

   if (currentQuestion == totalQuestions - 1) {
     nextButton.textContent = 'Finish';
   }

   if(currentQuestion == totalQuestions) {
           container.style.display = 'none';
           result.innerHTML =
            `<h1 class="final-score">Your score: ${totalScore}</h1>
            <div class="summary">
               <h1>Summary</h1>
               <p>Possible - Personality Traits, see below for a summary based on your results:</p>
               <p>15 - 21- You Need Help</p>
               <p>10 - 15 - Good Soul</p>
               <p>5 - 10 - Meh </p>
               <p>5 - Are You Even Real</p>
           </div>
           <button class="restart">Restart Quiz</button>`;
           return;
       }

   generateQuestions(currentQuestion);
}

//Function to load previous question
function loadPreviousQuestion() {
    //Decrement quentions index
    currentQuestion--;
    //remove last array value;
    score.pop();
    //Generate the question
    generateQuestions(currentQuestion);
}

//Fuction to reset and restart the quiz;
function restartQuiz(e) {
    if(e.target.matches('button')) {
    //reset array index and score
    currentQuestion = 0;
    score = [];
    //Reload quiz to the start
    location.reload();
    }
}

generateQuestions(currentQuestion);
nextButton.addEventListener('click', loadNextQuestion);
previousButton.addEventListener('click',loadPreviousQuestion);
result.addEventListener('click',restartQuiz);

*/
