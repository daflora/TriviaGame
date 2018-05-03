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
//      can't get it to hold off from starting
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


$("#question").html("<h1>Astro Trivia!</h1><h2>The Sky! It's Full of Stars! Hooray!</h2>");
$("#tracker").html("<small>Click any button to begin...</small>");

$("#buttons").on("click",runTrivia);

// Game framework handles start transition and final
function runTrivia(){
  $("#question").html("<h2>WE START</h2>");
  // setTimeout(function(){$("#question").html("<h2>WE START</h2>");},500);
  // setTimeout(function(){$("#question").html("<h2>GET READY!</h2>");},1500);
  runLoop();
}

// Loop runs the question/answer part
function runLoop(){
  for (var i = 1; i<questionList.length; i++){
  scoreKeep();
  $("#question").html("<h2>"+questionList[i]+"</h2>");
  $("#btnA").html("<h3>"+btnAAnswers[i]+"</h3>");
  $("#btnB").html("<h3>"+btnBAnswers[i]+"</h3>");
  $("#btnC").html("<h3>"+btnCAnswers[i]+"</h3>");
  $("#btnD").html("<h3>"+btnDAnswers[i]+"</h3>");
  run();



  }
}

function scoreKeep(){
  $("#tracker").html("Current score: " + score + " out of " + (count));
}

function displayImage() {
  $("#image-holder").html("<img src=" + images[count] + " width='400px'>");
}
var number = 10;
var intervalId;

function run() {
  clearInterval(intervalId);
  intervalId = setInterval(decrement, 1000);
}

function decrement() {
  number--;
  $("#timer").html("<h2>" + number + "</h2>");
  if (number === 0) {
    stop();
    alert("Time Up! Your score is currently: " + score);
  }
}

function stop() {
  clearInterval(intervalId);
}
// This will run the display image function as soon as the page loads.
displayImage();
