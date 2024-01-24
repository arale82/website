var buttonColours = new Array("red", "blue", "green", "yellow");
var gamePattern = new Array();
var userChosenColour;
var userClickedPattern = new Array();
var level = 0;

//MAIN FUNCTIONS
function nextSequence() {
  userClickedPattern = [];
  var randomNumber = Math.floor(Math.random()*4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);
  console.log("gamePattern:"+gamePattern);
  animatePress(randomChosenColour);
  level++;
  $("h1").html("Level "+level);
}
function animatePress(color){
  playSound(color);
  var button = $("div#"+color);
  button.addClass("pressed");
  setTimeout(function(){
    button.removeClass("pressed");
  }, 100);
}
function playSound(color) {
  var audio = new Audio("./sounds/"+color+".mp3");
  audio.play();
}

//GAME START BY PRESSING A KEY ON THE KEYBOARD
$(document).on("keydown",function(){
  if(level===0){
    nextSequence();
  }
});

//PLAYING THE GAME

$("div.btn").on("click",function(event){
  userChosenColour = event.target.id;
  userClickedPattern.push(userChosenColour);
  //console.log("userClickedPattern:"+userClickedPattern);
  animatePress(userChosenColour);
  checkAnswer(userClickedPattern.length-1);
})

function startOver() {
  gamePattern = new Array();
  userClickedPattern = new Array();
  level = 0;
}

function checkAnswer(currentLevel){
  console.log(gamePattern[currentLevel] +"-"+ userClickedPattern[currentLevel]);
  if(gamePattern[currentLevel] == userClickedPattern[currentLevel]){
    console.log("success");
    if(currentLevel===gamePattern.length-1){
      //next level
      setTimeout(nextSequence, 1500);
    }
  } else {
    //gameOVER
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function(){
      $("body").removeClass("game-over");
    }, 200);
    $("h1").html("GAME OVER<br/>Press any key to restart");
    startOver();
  }
}
