var audio = new Audio('../clock-ticking-2.wav');
var audio1 = new Audio('../clock-ticking-2.wav');
function ticking(){
  audio.play();
}
function Rhour(){
  audio1.play();
}


setInterval(function(){
date = new Date();
htime = date.getHours();
mtime = date.getMinutes();
stime = date.getSeconds();
// console.log(htime +":"+ mtime  +":"+ stime )
hrotation=30*htime +mtime/2 + stime/120;
mrotation=6*mtime;
srotation=6*stime;

hour.style.transform = `rotate(${hrotation}deg)`;
min.style.transform = `rotate(${mrotation}deg)`;
sec.style.transform = `rotate(${srotation}deg)`;
if (mtime=== 25 && stime==30) { 
  Rhour();
}
ticking();
},1000)

