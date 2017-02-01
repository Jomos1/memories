 var timer = function(){
   var counter = 60;
   setInterval(function() {
     counter--;
      if (counter >= 0) {
         span = document.getElementById("time");
         span.innerHTML = counter;
      }
      if (counter === 0) {
         alert('you suck');
         clearInterval(counter);
       }
     }, 1000);
};

var init = function() {
  var card = document.getElementById('card');
  
  document.getElementById('flip').addEventListener( 'click', function(){
    card.toggleClassName('flipped');
  }, false);
};

window.addEventListener('DOMContentLoaded', init, false);