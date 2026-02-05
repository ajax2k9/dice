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
    if(dice.length == 0){
        background(50,50,100);
    } else {
        background(50,50,50);
    }
        
    dice.forEach(d=>d.draw())
    noLoop()
}



