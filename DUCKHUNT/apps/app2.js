
$(document).ready(function(){
  console.log('loaded');
  $('#button').click(startGame);
  $(".ship").click(blowUp);
  $('#button').animate({'top': 250}, 3000);
});
var level = 1;



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
      "left": Math.random()*(c/50),
      "top": Math.random()*(c/5)
    },
    4000)
    .animate({
      "left": Math.random()*(c/5),
      "top": Math.random()*(c/5)
    },
    2900);

  $('.ship').not(":odd").animate({
      "left": Math.random()*(c/45),
      "top": Math.random()*(c/10)
    },
    3500)
    .animate({
      "left": Math.random()*(c/2),
      "top": Math.random()*(c/4)
    },
    5000);
    c++;
    console.log(c);
    if(c > level*9000) {clearInterval(flyInt)}
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
  console.log("ship destroyed");
  clearInterval(this.shipInt);
  console.log(this.flyInt);
  console.log(this);
};

var endGame = function (){

}
