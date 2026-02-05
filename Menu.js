class Menu {
    constructor() {
        let logo = createImg("images/dicer.png","Dicer logo")
        logo.parent("sketch-container")
        logo.size(100,100)
        let label = createP("Dicer")
        label.parent("sketch-container")
        label.id("logo")
        this.input = createFileInput(this.createImage)
        this.input.parent("sketch-container")
        this.input.hide()
        let butt = createButton("Import Photo")
        butt.parent("sketch-container")
        butt.mouseClicked(()=>this.input.elt.click())
        let saveButt = createButton("Save Dicer")
        saveButt.parent("sketch-container")
        saveButt.mouseClicked(()=>{saveCanvas()})
        let cubeSel = createSelect(false)
        cubeSel.parent("sketch-container")

        for(let i = 1; i <= 3; i++){
            cubeSel.option(i*10)
        }

        cubeSel.changed(()=>{
            spacing = int(cubeSel.selected())
            this.remakeImage()
        })

        cubeSel.id("cubeSel")
        let copyrt = createP("(c) Alex Mendelsberg 2026")
        copyrt.id("copyright")



    }

    remakeImage(){
        if (img == undefined) return;
        dice = []
        img.loadPixels();

           let pix =img.pixels;
           resizeCanvas(img.width,img.height)
            for(let i = 0; i <img.width; i+=spacing){
                for(let j = 0; j <img.height; j+=spacing){
                    let idx = i + j * img.width
                    let c = color(pix[idx*4],pix[idx*4+1],pix[idx*4+2])
                    let brt = floor(brightness(c)/8.4)
                 
                    dice.push(new diceObj(i/spacing,j/spacing,min(brt,12)))
                }
            }
           loop()
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
                    let brt = floor(brightness(c)/8.4)
                 
                    dice.push(new diceObj(i/spacing,j/spacing,min(brt,12)))
                }
            }
           loop()
        })
    }

}