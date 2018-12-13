$(document).ready(function() {
  var suits = ["clubs", "diamonds", "spades", "hearts"]
  var cards = ["ace", "2", "3", "4", "5", "6", "7", "8", "9", "10", "jack", "queen", "king"]
  suits.forEach(function(suit) {
    $("div#output-row").append(
      `<div class='col-md-3'><h5 class='${suit}'>${suit}</h5><ul id='${suit}'></ul></div>`
    );
    cards.forEach(function(card){
       $(`ul#${suit}`).append(
         `<li class='${suit}'>${card} of ${suit}</li>`
       );
    });
  });
});
