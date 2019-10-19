function MyTimer(minutes, timerCallback, endCallback) {
  var timer;
  var value = minutes * 60;
  return {
    start: function() {
       if (!timer) {
         timer = setInterval(function() {
           if (value>0) {
             value --;
             timerCallback(value);
           } else {
             clearInterval(timer);
             timer = null;
             endCallback();
           }
         },100);
       }
    },
    
    pause: function() {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    },
    
    increase: function() {
      minutes ++;
      value = minutes * 60;
      pause();
    },
    
    decrease: function() {
      if (minutes>2) {
        minutes --;
        value = minutes * 60;
        pause();
      }
    }
    
  }
}

var breakTimer = MyTimer(0.5, function(value) {
  document.getElementById("countB").innerHTML = value;
},function(){
  console.log("end 2");
});

window.promodoTimer = MyTimer(1, function(value){
  document.getElementById("count").innerHTML = value;
},function(){
  console.log("end");
  breakTimer.start();
});

function TimerControl(selector) {
  
}

TimerControl('#promodoTimer');
TimerControl('#breakTimer');





