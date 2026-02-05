class diceObj {
    
    constructor(x,y,val) {
        this.x = x * spacing+spacing/2
        this.y = y * spacing+spacing/2
        this.val = val;
    }

    drawPips(num,white){
        let pipLocs = [];
        let s = spacing/4
        switch(num){
            case 0:
                pipLocs.push(createVector(0,0));
                break;
            case 1:
                pipLocs.push(createVector(-1,-1));
                pipLocs.push(createVector(1,1));
                break;
            case 2:
                pipLocs.push(createVector(0,0));
                pipLocs.push(createVector(-1,-1));
                pipLocs.push(createVector(1,1));
                break;
            case 3:
                pipLocs.push(createVector(1,1));
                pipLocs.push(createVector(1,-1));
                pipLocs.push(createVector(-1,1));
                pipLocs.push(createVector(-1,-1));
                break;
            case 4:
                pipLocs.push(createVector(1,1));
                pipLocs.push(createVector(1,-1));
                pipLocs.push(createVector(-1,1));
                pipLocs.push(createVector(-1,-1));
                pipLocs.push(createVector(0,0));
                break;
            case 5:
                pipLocs.push(createVector(1,1));
                pipLocs.push(createVector(1,-1));
                pipLocs.push(createVector(-1,1));
                pipLocs.push(createVector(-1,-1));
                pipLocs.push(createVector(-1,0));
                pipLocs.push(createVector(1,0));
                break;
            default:
                console.log("oops")
                return;
        }
        noStroke()
        let c1 = color(255)
        let c2 = color(0)
        if(!white){
            c1 = color(0)
            c2 = color(255)
        }
        fill(c1)
        rect(this.x,this.y,spacing,spacing,s)
        fill(c2)
        pipLocs.forEach(p=>{circle(this.x + p.x*s,this.y+p.y*s,s)})
    }

    draw(){
        let b_idx = this.val
        
        if(b_idx < 6){
            this.drawPips(b_idx,false)
        }else {
            this.drawPips(11-b_idx,true)
        }
    }
}