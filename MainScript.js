let dice = [];
let spacing = 10
let img;
let menu;
function setup(){
   createCanvas(400,400)
   rectMode(CENTER)

menu = new Menu()
}


function draw(){
    background(50,50,100);
    dice.forEach(d=>d.draw())
    noLoop()
}



