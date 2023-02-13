class object{
    constructor(x, y, inputStrings){
        this.strings = inputStrings;
        this.x = x;
        this.y = y;
        this.eaten = false;
        this.cWidth = 311/5;
        this.cHeight = 269/5;
        this.currentImage = loadImage(this.strings[Math.floor(random(0, this.strings.length - 1))]);
    }

    draw(){
        if(!this.eaten) image(this.currentImage, this.x, this.y, 311/5, 269/5);
    }
}