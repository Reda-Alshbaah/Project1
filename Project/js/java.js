
var countDownDate = new Date("sep 23, 2023 18:30:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;
  var counter = document.querySelector("#countdown");
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  counter.innerHTML = days + " يوم " + hours + " ساعة "
  + minutes + " دقيقة " + seconds + " ثانية ";

  if (distance < 0) {
    clearInterval(x);
    counter.innerHTML = "لقد وصلت متأخراً";
  }
}, 1000);

const win = document.querySelector("#winner");
const loader = document.querySelector(".loader-con");

var myModal = new bootstrap.Modal(document.getElementById('modal'), {
  Keyboard: false
})

win.addEventListener( 'click' , function(){
    loader.style.display = 'block';
    sim = setInterval(progressSim, 20);
	
    
});






