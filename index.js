var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedPattern = [];

var started = false;

var level = 0;

$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);

    nextSequence();

    started = true;
  }
});

function nextSequence() {

  level++;

  $("#level-title").text("Level " + level);

  var randomNumber = Math.floor(Math.random() * 4);

  var randomChosenColour = buttonColours[randomNumber];

  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

  playSound(randomChosenColour);

  animatePress(randomChosenColour);

}

$(".btn").click(function(){
  var userChosenColour = event.target.id;

  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);

  animatePress(userChosenColour);
});


function playSound(name){
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function animatePress(currentColour)
{
  $("." + currentColour).addClass("pressed");
  setTimeout(function(){$("." + currentColour).removeClass("pressed");}, 100);
}

function checkAnswer(currenLevel){

}
