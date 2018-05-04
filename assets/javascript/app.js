var images = [
  "assets/images/cover.jpg",
  "assets/images/gentle_black_hole.jpg",
  "assets/images/io.jpg",
  "assets/images/magellanic_clouds.jpg",
  "assets/images/pluto_charon.jpg",
  "assets/images/saturn.jpg"
];

var questionList = [
  "PLACEHOLDER",
  "This special type of black hole would allow a person to cross the event horizon without being torn apart by tidal forces.",
  "This moon of Jupiter is the most volcanically active place in the Solar System.",
  "This is the closest galaxy outside of our own Milky Way.",
  "These two minor planets orbit each other, as their center of gravity lies between them.",
  "IT HAS RINGS! WHAT IS IT????"
];

var btnAAnswers = [
  "A. DON'T PICK ME",
  "A. Quasar",
  "A. Ganymede",
  "A. Phobos and Deimos",
  "A. Pluto and Charon",
  "A. satURN"
];

var btnBAnswers = [
  "B. PLACEHOLDER",
  "B. ANY Black Hole! I saw the film, yo.",
  "B. Io",
  "B. Andromeda",
  "B. Phobos and Deimos!",
  "B. SaTuRn"
];

var btnCAnswers = [
  "C. I MEAN IT. DO NOT DO IT.",
  "C. Supermassive Black Hole",
  "C. Europa",
  "C. Alpha Centauri",
  "C. Neptune and Uranus",
  "C. SATurn"
];

var btnDAnswers = [
  "D. Fool! Were you born in the Sun?",
  "D. Microscopic Black Hole",
  "D. Callisto",
  "D. Magellanic Cloud",
  "D. Titan and Triton",
  "D. Jupiter! I mean Saturn!"
];

var answerKey = ["0","C","B","D","A","D"];

// PseudoCode:
//
//  "click" starts game.
//      can't get the timer to delay, or to reset
//      having difficulty getting the buttons to register their events
// Function:
//  for(i=0;length;i++){
//    start/reset timer
//    show question[i]
//    SHOW answers[i] (1 per button)
//    logic tree:
        // if (right answer):
        //   score++;
        //   alert(CORRECT)
        // else if (wrong answer):
        //   show answer(2500);
        //   alert(Actually...)
        // if (time runs out):
        //   show alert;
        //   next}
//    };
//  IDS:  #question
//        #timer
//        #tracker
//        #btnA
//        #btnB
//        #btnC
//        #btnD
// Variable showImage will hold the setInterval when we start the slideshow
// var showImage;
var count = 0;
var score = 0;
var number = 5;
var intervalId;
var timerId;

$("#question").html("<h1>Astro Trivia!</h1><h2>The Sky! It's Full of Stars! Hooray!</h2>");
$("#tracker").html("<small>Click any button to begin...</small>");
$("#timer").html("<h2>HELLO!</h2>");
$("#buttons").on("click",function(){
    if(count===0){runTrivia();}
  });

// Game framework handles start transition, supposedly assigns buttons
function runTrivia(){
  $("#question").html("<h2>WE START</h2>");
  buttonAssign();
  setTimeout(function(){$("#question").html("<h2>GET READY!</h2>");},1500);
  number = 10;
  question();
}

// function runs the question/answer part
function question(){
  timerId = setInterval(nextQuestion(), 5000);
  stop();
  run();
  // $(document).on("click",'#buttons',function(event){
  $(document).on("click",'#buttons',function(event){
    var answer = event.target.value;
    // console.log(answer);
    if (answer === answerKey[count]){
      // stop();
      score++;
      intervalId = setInterval(rightAnswer(),3000);
      setInterval(nextQuestion(), 3000);
    }
    else if (answer !== answerKey[count]){
      // stop();
      intervalId = setInterval(wrongAnswer(),3000);
      setInterval(nextQuestion(), 3000);
    }
  });
}

function nextQuestion(){
  // stop();
  count++;
  $("#question").html("<h3>"+ questionList[count]+"</h3>");
  displayImage(count);
  $("#btnA").html("<h3>"+btnAAnswers[count]+"</h3>");
  $("#btnB").html("<h3>"+btnBAnswers[count]+"</h3>");
  $("#btnC").html("<h3>"+btnCAnswers[count]+"</h3>");
  $("#btnD").html("<h3>"+btnDAnswers[count]+"</h3>");
  // run();

  if (count >= images.length) {
    count = 0;
    stop();
  }
}

function rightAnswer(){
  score++;
  $("#question").html("<h1>CORRECT!</h1>");
  scoreKeep();
  $("#image-holder").html("<img src=assets/images/right.jpeg width='400px' height='200px'>");
}

function wrongAnswer(){
  // score++;
  $("#question").html("<h3>Sorry! Back to the telescopes for you!</h3>");
  scoreKeep();
  $("#image-holder").html("<img src=assets/images/wrong.jpeg width='400px' height='200px'>");
}

// Having difficulty here. Tried to assign two different ways, but inconsistent results for both.
function buttonAssign(){
  $("#btnA").val("A");
  $("#btnB").val("B");
  $("#btnC").attr("value","C");
  $("#btnD").attr("value","D");

  $(document).on("click",'#btnB',function(event){
    console.log(event.target.value);
  });
}

function scoreKeep(){
  $("#tracker").html("Current score: " + score + " out of " + (count));
}

function displayImage(index) {
  $("#image-holder").html("<img src=" + images[index] + " width='400px' height='200px'>");
}

//  Runaway timers is an issue as well.
function run() {
  number=8;
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
}

function decrement() {
  number--;
  $("#timer").html("<h2>" + number + "</h2>");
  if (number <= 0) {
    stop();
    number=10;
    alert("Time Up! Your score is currently: " + score);
  }
}

function stop() {

  // clearInterval(intervalId);
  clearInterval(timerId);
}
// This will run the display image function as soon as the page loads.
displayImage(count);
