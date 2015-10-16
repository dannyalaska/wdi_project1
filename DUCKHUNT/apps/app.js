$(document).ready(function(){
console.log('loaded');

$('#button').on('click', shipPath);
$('.ship').on('click', blowUp);
$('#button').animate({'top': '300'}, 3000);
});
var cloneShip;

var moveShip = function(num){
  if (num <= 5) {
  $('.ship').animate({"left": Math.random()*220, "top": Math.random()*300}, "slow").animate({"left": Math.random()*170, "top": Math.random()*300}, "slow");
} else $('.ship').animate({"top": '100px', "top": "500px"}, "slower");
};

var fly = function (){ moveShip(1)};
var shipInt;

var shipPath = function(){
  shipInt = setInterval(fly, 1000);
/*
  setTimeout(function(){
    clearInterval(shipInt);
  }, 3000)
*/
}
var newShip = function(){
cloneShip = $('.ship').clone(true).appendTo('.surface');
cloneShip.animate({"left": Math.random()*220, "top": Math.random()*300}, "slow").animate({"left": Math.random()*170, "top": Math.random()*300}, "slow");
};

var createInvasion = function(){
var stopInvasion = function(){
  setInterval(cloneShip, 2000);
  };
setTimeout(stopInvasion, 10000);
};






var blowUp = function(){
  $(this).attr("id","destroyed");
  console.log("got clicked");
  clearInterval(shipInt);
  moveShip(10);
};
