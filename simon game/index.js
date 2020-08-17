
var userClickedPattern = []; // array shows the pattern of button clicks.
var gamePattern = []; // array showing the pattern of randomly chosen button clicks.
var level = 0; //creates a new level, represents the game level
buttonColors = ["red", "blue", "green", "yellow"]; 
var started = false;

console.log(userClickedPattern);
console.log(gamePattern);

$(document).keypress(function() {
  // the h1 title starts out saying "Press a key to start". When the game has started, this changes to Level 0
  if (!started) {
    $("h2").html("Level " + level)
    nextSequence();
    started = true;
  } 
});

$("button").click(function () {
   //event listener with an anonymous function that adds the color of the button clicked to the userClickedPattern array. It also plays the sound allocated to the respective button.
  // console.log(this)
    var userChosenColor = this.id;
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
     // console.log(userChosenColor); //for investigation or error checking.
    checkAnswer(userClickedPattern.length - 1);
});

function nextSequence () {
  level++;
  userClickedPattern = [];
  $("h2").html("Level " + level) // updating the h2 everytime its changed.
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColors[randomNumber];
  gamePattern.push(randomChosenColor);
  //picks a random color from the "button Color" array and adds it to the "game pattern" array. 
  var chosenColor = gamePattern[(gamePattern.length) - 1];
  console.log(chosenColor); //show the color that flashes in the console. It's the color chosen from The nextSequence function. I'm using it for debugging/error checking. 
  $("#" + chosenColor).fadeOut(100).fadeIn(100).click(playSound); // produces the flash effect on the button chosen. Also activates the playSound function that triggers the sound allocated to the respective button when clicked. 
  playSound(chosenColor);
  window.chosenColor = chosenColor;
}

function playSound (name) {
    var tone = {}
    tone = new Audio();
    tone.src = "sounds/" + name + ".mp3";
    tone.autoplay = true;
    tone.mute = false;
    tone.addEventListener("load", function () {
      tone.play();
    })
    // console.log(name)
    // console.log(tone);
    // tone.play();

  // this is the function that plays the sound allocated to the respective button.
}

function animatePress(currentColor) {
  var activeButton = "#" + currentColor;
  $(activeButton).addClass("pressed");
  setTimeout(function() {
    $(activeButton).removeClass("pressed");
  }, 100);
}

function checkAnswer (currentLevel) {
  if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
    // console.log("right");
    if (userClickedPattern.length === gamePattern.length) {
      setTimeout (nextSequence, 1000);
    }
  } else {
    // console.log("wrong");
    var wrong = new Audio("sounds/wrong.mp3");
    wrong.play();
    $("body").addClass("game-over");
    setTimeout (function () {
      $("body").removeClass("game-over")
    }, 200)
    $("h2").text("Game Over!!! Press any key to restart");
    startOver();
  }
}

function startOver () {
  level = 0;
  gamePattern= [];
  started = false;
}