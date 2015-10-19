
$(document).ready(function(){
  console.log('loaded');
  $('#button').click(startGame);
  $(".ship").click(blowUp);
  $('#button').animate({'top': 250}, 3000);
  $("<div>").appendTo(".surface").text("Level:   " + level).attr("class", "level");
  $("<div>").appendTo(".surface").text("Score: "+ points).attr("class", "points");
});
var level = 1;
var points = 0;


function Ships(){
  this.name = name;
  $("<div>").addClass("ship")
  .attr("id", Math.floor(Math.random() * 100))
  .appendTo('.surface')
  .css(
    "left", Math.random()*600,
    "top", Math.random()*60
  );
  $(".ship").click(blowUp);
};

var flyInt;


var shipsFly = function(){
  var c = 0;
  flyInt = setInterval(function(){

    $(".ship").not(":even").animate({
      "left": Math.random()*(c/5),
      "top": Math.random()*(c/2)
    },
    1000)
    .animate({
      "left": Math.random()*(c/5),
      "top": Math.random()*(c/4)
    },
    2900);

  $('.ship').not(":odd").animate({
      "left": Math.random()*(c/4),
      "top": Math.random()*(c/2)
    },
    3500)
    .animate({
      "left": Math.random()*(c/2),
      "top": Math.random()*(c/4)
    },
    5000);
    c++;
    if(c > level*9000) {endGame()}
  })
};


var startGame = function (){
  $("#button").css('display', 'none');
  var i = 0;
  var invasionInt = setInterval(function(){
    Object.create(new Ships);
    i++;
    if(i >=level*10) clearInterval(invasionInt);
  },2000);
  shipsFly();
};


var blowUp = function(e){
  $(e.target).addClass("destroyed")
  .animate({"top" : "450px"});
  setTimeout(function(){$(e.target).css('display', 'none')}, 1500);
  console.log("ship destroyed");
  clearInterval(this.shipInt);
  console.log(this.flyInt);
  console.log(this);
  points++;
  $(".points").text("Score: "+ points)
  if (points >= level+10){
    level++;
    console.log(level);
  } else if (points >= 50 );
  console.log(points)
    endGame();
};

var endGame = function(){
  clearInterval(invasionInt);
  $('<div>').appendTo('.surface').attr('id', 'over').text("Game Over");
  $('.ship').css('display', 'none');
};
