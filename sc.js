// particle.js
window.onload = init();
function init(){
// canvas = document.getElementById('canvas');
// canvas = document.getElementById('bd');
context = canvas.getContext('2d');
canvas.width = window.innerWidth ;
canvas.height = window.innerHeight;
canvas.addEventListener('mousemove',MouseMove,false);

mouse = {x:0,y:0}
particleHolder = [];
x = 100;
y = 100;
angle = 0.2;
radius = 80;
particleCount = 1000;
color = [
'rgba(106, 210, 231, 0.5)',
'rgba(250, 104, 0, 0.5)',
'rgba(243, 132, 48, 0.5)',
'rgba(198, 244, 98, 0.5)',
'rgba(255, 107, 107, 0.5)',
'rgba(250, 204, 0, 0.5)',
 'rgba(232, 125, 2, 0.5)',
'rgba(202, 232, 105, 0.5)',
'rgba(0, 169, 199, 0.5)',
'rgba(63, 191, 202, 0.5)',
'rgba(174, 225, 55, 0.5)',
 'rgba(208, 231, 80, 0.5)',
'rgba(78, 189, 233, 0.5)',
'rgba(37, 174, 228, 0.5)',
'rgba(249, 214, 36, 0.5)',
'rgba(240, 122, 25, 0.5)',
'rgba(239, 169, 46, 0.5)',
'rgba(136, 197, 38, 0.5)',
'rgba(190, 242, 2, 0.5)',
'rgba(250, 42, 0, 0.5)',
'rgba(0, 178, 255, 0.5)',
'rgba(127, 255, 36, 0.5)',
'rgba(194, 255, 102, 0.5)',
'rgba(200, 255, 0, 0.5)',
'rgba(19, 205, 75, 0.5)',
'rgba(126, 112, 215, 0.5)',
'rgba(187, 233, 7, 0.5)',
'rgba(192, 250, 56, 0.5)',
'rgba(170, 255, 0, 0.5)',
'rgba(255, 170, 0, 0.5)',
'rgba(255, 0, 170, 0.5)',
'rgba(170, 0, 255, 0.5)',
'rgba(0, 170, 255, 0.5)',
'rgba(255, 255, 0, 0.5)'
];

function MouseMove(event)
{
	mouse.x = event.pageX - canvas.offsetLeft;
	mouse.y = event.pageY - canvas.offsetLeft;
}
for(i = 0; i < particleCount ; i++)
{particleHolder.push(new generateParticles());}
function generateParticles()
{
this.x = Math.random()*canvas.width;
this.y = Math.random()*canvas.height;
this.color = color[Math.floor(Math.random()*color.length)];
this.rad = Math.floor(Math.random()*8);
}
function vibrate()
{

context.fillStyle = 'white';
context.fillRect(0, 0, canvas.width, canvas.height);
for(var j = 0; j < particleHolder.length; j++)
{
var p = particleHolder[j];
var distanceX = p.x - mouse.x;
var distanceY = p.y - mouse.y;
particleDistance =  Math.sqrt(distanceX*distanceX + distanceY*distanceY);

particleMouse = Math.max( Math.min( 75 / ( particleDistance /p.rad ), 10 ), 0.1 );
context.beginPath();
context.fillStyle = p.color;
context.arc(p.x + Math.sin(angle++*Math.cos(radius++)), 
p.y - Math.cos(angle++*Math.sin(radius++)), 
p.rad*particleMouse, Math.PI*2, false);
context.fill();
}
}
setInterval(vibrate, 30);
};

// Quote area
let cr = ["linear-gradient(to right bottom, #9c78fc, #14a2ff, #00c0ff, #00d6f6, #62e6dc, #86ece3, #a3f2ea, #bef8f1, #ccf7ff, #e0f6ff, #f0f6ff, #f8f8f8)",
          "linear-gradient(to right bottom, #78fc82, #9afa89, #b4f993, #c8f79f, #d9f6ad, #cffac3, #ccfcd7, #d0fde8, #d3fefe, #e4fdff, #f6fdff, #ffffff)",
          "linear-gradient(to right bottom, #c6d124, #e1cc46, #f4c965, #fec883, #ffcaa0, #ffcdb6, #ffd3ca, #fbdbdb, #fbe4ea, #faedf5, #faf7fc, #ffffff)",
          "linear-gradient(to right bottom, #fe4ab1, #eb72d5, #d692ed, #c3abf9, #bac0fc, #c1cafb, #cad4f9, #d4ddf6, #dfe3f6, #e9eaf7, #f1f1f7, #f8f8f8)",
          "linear-gradient(to right bottom, #f984b8, #f59fd2, #f0b8e6, #eecff4, #f1e5fc, #f5eafb, #f8effa, #faf4fa, #faebf2, #fbe1e5, #fad9d5, #f5d2c3)",
          "linear-gradient(to right bottom, #9cfeae, #99ffd3, #a8ffee, #c5fffd, #e6fcff, #eefaff, #f8f7ff, #fef6fc, #ffeef3, #ffe7e5, #ffe2d3, #f5e0c3)",
          "linear-gradient(to right bottom, #fe9cc4, #feadce, #fdbdd8, #fccde1, #fbddea, #f8e3f1, #f6e9f6, #f5eef9, #ecedfd, #deedff, #cfeefd, #c3eff5)",
          "linear-gradient(to right bottom, #edbdf8, #ffc3e2, #ffcfd4, #ffdfd2, #feedde, #fcf2e1, #faf6e6, #f9faeb, #f6f9e1, #f3f7d7, #eff6cd, #ebf5c3)"]

let a = 0;          

let bg = document.querySelector(".wrapper")
// let bg = document.querySelector("body")

setInterval(function change(){
    a = a < cr.length ? ++a : 0
    bg.style.background = cr[a]
}, 5000)