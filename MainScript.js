let dice = [];
let spacing = 10
let w = 0
let img;
function preload(){
    loadImage("images/kats-dog.jpg",(picture)=>{
            img = picture
        })
}
function setup(){
   createCanvas(img.width,img.height)
   rectMode(CENTER)
   img.loadPixels();
   let pix =img.pixels;
    for(let i = 0; i <img.width; i+=spacing){
        for(let j = 0; j <img.height; j+=spacing){
            let idx = i + j * img.width
            let c = color(pix[idx*4],pix[idx*4+1],pix[idx*4+2])
            let brt = floor(brightness(c)/8.33) + 1
            
            dice.push(new diceObj(i/spacing,j/spacing,brt))
        }
    }
}


function draw(){
    background(100);
        dice.forEach(d=>d.draw())
        noLoop();

}



