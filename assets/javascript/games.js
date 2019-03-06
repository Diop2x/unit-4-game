var wins = 0;
var losses = 0;
var score = 0;


var yellow = 0;
var green = 0;
var red = 0;
var blue = 0;
var maxScore = 0;


function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}


$(document).ready(function() {

  maxScore = getRandomInt(19, 120);
  
  

  function resetGame() {
    score = 0;
    $("#score").text("Total Score: " + score);
    maxScore = getRandomInt(19, 120);
    console.log("Max Score", maxScore);
    yellow = 0;
    green = 0;
    red = 0;
    blue = 0;
  } 
  function checkWin() {
    if (score === maxScore) {
      wins++;
      $("#wins").text("Wins: " + wins);
      resetGame();
    } else if (score > maxScore) {
      losses++;
      $("#losses").text("Losses: " + losses);
      resetGame();
    }
  } 

  
  $("#gem").on("click", function() {
    if (yellow === 0) {
      yellow = getRandomInt(1, 12);
      console.log(yellow);
    }
    score += yellow;
    $("#score").text("Total Score: " + score);
    checkWin();
  });
  
  
  $("#gem1").on("click", function() {
    if (green === 0) {
      green = getRandomInt(1, 12);
      console.log(green);
    }
    score += green;
    $("#score").text("Total Score: " + score);
    checkWin();
  });

  
  $("#gem2").on("click", function() {
    if (red === 0) {
      red = getRandomInt(1, 12);
      console.log(red);
    }
    score += red;
    $("#score").text("Total Score: " + score);
    checkWin();
  });
  
  $("#gem3").on("click", function() {
    if (blue === 0) {
      blue = getRandomInt(1, 12);
      console.log(blue);
    }
    score += blue;
    $("#score").text("Total Score: " + score);
    checkWin();
  });

}); 