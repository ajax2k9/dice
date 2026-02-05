class Menu {
    constructor() {
        this.input = createFileInput(this.createImage)
        this.input.parent("sketch-container")
        this.input.hide()
        let butt = createButton("Import Photo")
        butt.parent("sketch-container")
        butt.mouseClicked(()=>this.input.elt.click())
        let saveButt = createButton("Save Dicer")
        saveButt.parent("sketch-container")
        

    }

    createImage(file){
        if(file.type != 'image')return
        img = loadImage(file.data, () => {     
        img.loadPixels();
           let pix =img.pixels;
           resizeCanvas(img.width,img.height)
            for(let i = 0; i <img.width; i+=spacing){
                for(let j = 0; j <img.height; j+=spacing){
                    let idx = i + j * img.width
                    let c = color(pix[idx*4],pix[idx*4+1],pix[idx*4+2])
                    let brt = floor(brightness(c)/8.33)
                 
                    dice.push(new diceObj(i/spacing,j/spacing,min(brt,12)))
                }
            }
           loop()
        })
    }

}