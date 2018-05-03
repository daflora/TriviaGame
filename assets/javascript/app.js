var images = [
  "assets/images/cover.jpg",
  "assets/images/gentle_black_hole.jpg",
  "assets/images/io.jpg",
  "assets/images/magellanic_clouds.jpg",
  "assets/images/pluto_charon.jpg",
  "assets/images/saturn.jpg"
];

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
        //   next
        // else if (wrong answer):
        //   show answer(2500);
        //   next
        // if (time runs out):
        //   show watchpicture(2500);
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
var showImage;
// Count will keep track of the index of the currently displaying picture.
var count = 0;

$("#btnD").on("click", runTrivia());

function runTrivia(){
  $("#question").html("<h2>WE START</h2>");

}
// TODO: Use jQuery to run "startSlideshow" when we click the "start" button.
// $("#start").on("click", startSlideshow);
// TODO: Use jQuery to run "stopSlideshow" when we click the "stop" button.
// $("#stop").on("click", stopSlideshow);

// This function will replace display whatever image it's given
// in the 'src' attribute of the img tag.
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
  //  Decrease number by one.
  number--;
  //  Show the number in the #show-number tag.
  $("#timer").html("<h2>" + number + "</h2>");
  //  Once number hits zero...
  if (number === 0) {
    stop();
    //  Alert the user that time is up.
    alert("Time Up!");
  }
}

function stop() {
  clearInterval(intervalId);
}
// This will run the display image function as soon as the page loads.
displayImage();
