var userClickedPattern=[];
var gamePattern=[];

var buttonColours=["red","blue","green","yellow"]
var flag=true;
var level=0;

if(flag){
    $(document).on("keydown",function(){
        $("#level-title").text("Level " + level);
        nextSequence();
        flag=false;
    })
}

function checkAnswer(currentLevel){
    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {

        console.log("success");
  
           if (userClickedPattern.length === gamePattern.length){
  
          //5. Call nextSequence() after a 1000 millisecond delay.
          setTimeout(function () {
            nextSequence();
          }, 1000);

        }
  
      } else {
        
        console.log("wrong");
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){
            $("body").removeClass("game-over");
          }, 200);
        $("#level-title").text("Game Over, Press Any Key to Restart");
        startOver();

      }
}

function startOver(){
level=0;
gamePattern=[];
started=true;
}
$(".btn").on("click",function(){
    var userChosenColour = $(this).attr("id");
    userClickedPattern.push(userChosenColour);
    playSound(userChosenColour);
    animatePress(userChosenColour);
    checkAnswer(userClickedPattern.length-1);
    
   })
function nextSequence(){
    userClickedPattern=[];
    level++;
    $("#level-title").text("Level"+level);
    var randomNumber=Math.floor(Math.random()*4);
    var randomChosenColour=buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
    
    playSound(randomChosenColour);
}

function animatePress(currentColour){
    $("#"+currentColour).addClass("pressed");
    setTimeout(function(){
        $("#"+currentColour).removeClass("pressed");
      }, 100);
   }

function playSound(name){
    var sound=new Audio("./sounds/"+name+".mp3");
    sound.play()
}