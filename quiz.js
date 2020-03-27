// start(ques){
//   var ques=Math.random()*30;
//   var tion=Math.ceil(ques);
//
// }

var wrong=new Audio("sounds/no.mp3")
var win=new Audio("sounds/win.mp3")
var right=new Audio("sounds/ding.mp3")
var lose=new Audio("sounds/boo.mp3")
var st=new Audio("sounds/ding.mp3")

var clicks = 0;
var score = 0;
// clicks = clicks + 1
var questions = ['What is the full name of PAS?', 'What is the full name of the head of school?', 'What is the name of an Ivy school that starts with a D?', 'Is Stanford an Ivy? (Yes/No)', 'Is MIT an Ivy? (Yes/No)', "What is modern day human's scientific name?", 'What is the highest possible score for TOEFL iBT?', 'What is the highest possible score for SAT?', 'What is the highest possible score for Duolingo English Test?', 'Which Month are the AP exams held in?', 'How many valence electrons does a neon atom have?', "What is the name of Kim Jung Un's father?", "What is the name of Kim Jung Un's wife?", 'Which year did BTS debut?', 'Fill in the blanks: CRISPR-OOOO system', "Which year did Donald Trump's presidency begin?", 'Is Calvin cycle part of cellular respiration or photosynthesis?', 'What is a former alphabet that exists on the keyboard today?', 'Which country did COVID 19 come from?', 'Which planet got kicked out of the solar system in 2006?', 'Where does love actually come from?', 'Is bamboo tree a form of a tree, grass, fruit nonliving factor, or animal?', 'Is cucumber a fruit or a vegetable?', "Which day of the week is this year's Ivy day?", '1+1=?', 'What is the scientific name for cat?', 'What is the scientific name for dog?', 'What is the scientific name for rabbit?', 'What is the scientific name for lion?', 'What is the scientific name for wolf?'];

var answers = ['Pamela American School', 'Pamela Chu', 'Dartmouth', 'No', 'No', 'Homo Sapiens', '120', '1600', '160', 'May', '8', 'Kim Jung Il', 'Ri Sol-ju', '2013', 'cas9', '2017', 'Photosynthesis', '&', 'China', 'Pluto', 'Brain', 'Grass', 'Fruit', 'Thursday', '2', 'Felis catus', 'Canis lupus familiaris', 'Oryctolagus cuniculus', 'Panthera leo', 'Canis lupus'];

var current = 0

function shuffle(array, array2) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
    // swap elements array[i] and array[j]
    [array[i], array[j]] = [array[j], array[i]];
    [array2[i], array2[j]] = [array2[j], array2[i]];
  }}

function start(){
  shuffle(questions, answers);
  document.querySelector(".questions").innerHTML=questions[current]; // show first question
  document.querySelector(".start").classList.add("invisible"); // remove start btn
  document.querySelector(".ans").classList.remove("invisible"); // show input
  document.querySelector(".sc").innerHTML="Score: 0"; // show scoreboard
  current=current+1;
  document.querySelector(".next").classList.remove("invisible"); //show next
  st.play();
  }

// current = 10
// clicks = 10
// score = 2

function next(){
  clicks=clicks+1;
  if (clicks<10){ // KEEP PLAYING
    document.querySelector(".questions").innerHTML=questions[current]; // show next question
    var userAns = document.querySelector(".ans").value; // store user answer
    // console.log(questions[current-1]);
    // console.log(answers[current-1]);
    // console.log(userAns)
    if (userAns == answers[current-1]){ // CHECK IF CORRECT
      score = score+1;
      console.log("answer correct");
      document.querySelector(".sc").innerHTML="Score: "+score;
      right.play();
    } else{
      wrong.play();
    }
    current++;
    document.querySelector(".ans").value = '';
  } else if (clicks==10){ // GAME OVER CONDITION
    var userAns = document.querySelector(".ans").value;
    if (userAns == answers[current-1]) {
      score = score+1;
      document.querySelector(".sc").innerHTML="Score: "+score;
      console.log('correct game over');
      console.log(current);
    }
    if (score>6) {
      document.querySelector(".questions").innerHTML="Congratulations! You won.<br>Your score is: "+score;
      document.querySelector(".next").classList.add("invisible");
      document.querySelector(".ans").classList.add("invisible");
      win.play();
    } else if (score<7) {
      document.querySelector(".questions").innerHTML="Boo.<br>Your score is: "+score;
      document.querySelector(".next").classList.add("invisible");
      document.querySelector(".ans").classList.add("invisible");
      lose.play();
    }
  }
}

document.querySelector(".test-area").onkeydown=function(event){
  if (event.keyCode===13) {
    next();
}}

// function correctAnswer() {
//   // add score
//   // show next question
//   // add 1 to clicks
// }


// questions[0]
// questions[1]
// questions[2]
// questions[3]
// questions[4]
// questions[5]
// questions[6]
// questions[7]
// questions[8]
// questions[9]



//
// i = 8;
// j = random number between (0 - 8) 5
//
// [array[i], array[j] = [array[j], array[i]]] // swap elements array[i] and array[j]
//        8         5           5         8


//
// if question = 'a' {
//   display q1 ("what's your name")
// } else if question = 'b' {
//   display q2 ("how old are you?")
// } else if question = 'c' {
//   display q3 ("what is my dog's name?")
// } else if question = 'd' {
//   display q4 ("how old is Ethan")
// }
