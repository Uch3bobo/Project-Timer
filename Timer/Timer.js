const countDownDate = new Date(). getTime()+ 10 * 24 * 60 * 60 * 1000;

var countdown = setInterval(function(){
var now = new Date() .getTime();
var distance = countDownDate - now;
var days = Math.floor(distance / (1000* 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24))/(1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60))/(1000 * 60));
var seconds = Math.floor((distance % (1000 * 60))/1000);
document.getElementById("countdown").innerHTML = days + "d"+ hours + "h"+ minutes + "m" + seconds + "s";
if(distance<0) {
    clearInterval(countdown);
    document.getElementById("countdown").innerHTML="EXPIRED";
    startCountdown(); //Restart countdown
    
}

}, 1000);
