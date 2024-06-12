
var basicArray = ["red", "blue", "green", "yellow"];
var colorArray = []
var userArray = []
var summaArray =[]
var level = 0
var started = false;

$(document).on("keydown", function(){
    if (!started) {
        $("#level-title").text("Level " + level);
        nextSequence();
        started = true;
      }
}) 
function nextSequence()
{
    userArray =[]
    console.log(level)
    level++;
    $("#level-title").text("Level "+level);
    var rnum = Math.floor(Math.random() * 4)
    currentColor = basicArray[rnum];
    colorArray.push(currentColor);
    $("#" + currentColor).fadeIn(100).fadeOut(100).fadeIn(100);
    var audio = new Audio("sounds/" + currentColor + ".mp3");
    audio.play();
    console.log(colorArray)
   
}

$(".btn").on("click", function(){
    var myColor = this.id;
    userArray.push(myColor)
    $("#" + myColor).fadeIn(100).fadeOut(100).fadeIn(100);
   var audio = new Audio("sounds/" + myColor + ".mp3");
   audio.play();
   patternChecker();
   

});

function patternChecker(){ 
       
       console.log(userArray)
        if (colorArray[userArray.length-1] === userArray[userArray.length-1]) {
           
            if(level === userArray.length)
            {
                setTimeout(function(){nextSequence()},2000);
                
            }
            
        }
        else{
            console.log(false);
            $("#level-title").text("Game Over");
            $("body").addClass("game-over");
            var audio = new Audio("sounds/wrong.mp3");
            audio.play();
      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 3000);
       setTimeout(function(){
        startOver();}, 3000);
        }
}

function startOver(){
     colorArray = [];
 userArray = [];
 level = 0;
 started = false;
 $("#level-title").text("Press any key to start");
}