var gamePattern = [];
var userClickedPattern = [];
var buttonColours = ["red", "blue", "green", "yellow"];
var started = false;
var level = 0;

//detecting click on buttons
$(".btn").on("click", function () {
  var userChosenColor = this.id; //we get the id of the button which is clicked
  userClickedPattern.push(userChosenColor); //detecting pattern clicked by the user

  playSound(userChosenColor);
  animatePress(userChosenColor);
  console.log(userClickedPattern);
  console.log(gamePattern);

  //answer check
  checkAnswer(userClickedPattern.length - 1);
});

$(document).on("keypress", function (event) {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

/***********************************************          ALL FUNCTIONS        **********************************************************************/

//adding animation
function animatePress(currentColour) {
  $("#" + currentColour).addClass("pressed");
  //adding delay before removing class
  setTimeout(() => {
    $("#" + currentColour).removeClass("pressed");
  }, 100);
}

function checkAnswer(currentLevel) {
  //check the elements index by index
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    console.log("success");

    //if length becomes equal then again call next sequence function and by this we automatically reset the user array
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout(() => {
        nextSequence();
      }, 1000);
    }
  } else {
    console.log("wrong");
    playSound("wrong");

    $("body").addClass("game-over");
    setTimeout(() => {
      $("body").removeClass("game-over");
    }, 200);

    $("#level-title").text("Game Over, Press any key to Restart");

    //resets all values
    startOver();
  }
}

//random number function
function nextSequence() {
  // Once nextSequence() is triggered, reset the userClickedPattern to an empty array ready for the next level
  userClickedPattern = [];

  level++;
  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour); //pushing chosen color to gamepattern to remember it

  $("#" + randomChosenColour)
    .fadeIn(100)
    .fadeOut(100)
    .fadeIn(100);

  playSound(randomChosenColour);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
