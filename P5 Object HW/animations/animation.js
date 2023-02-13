class animation{

    constructor(stringInput){
        this.strings = stringInput;
        this.animationImg = [];
        for (var i = 0; i < this.strings.length; i++){
            this.animationImg[i] = loadImage(this.strings[i]);
        }
    }

    draw(x, y, frame, widthScale, heightScale){
        //console.log(this.strings[frame]);
        image(this.animationImg[frame],x ,y , 100, 100);
    }
}