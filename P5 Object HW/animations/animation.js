class animation{

    // This class, compared to the Character Class, is much simpler. It'll look super familiar to those following the class, but i've made some minor adjustments

    constructor(stringInput){
        this.strings = stringInput;
        this.animationImg = [];

        // Those looking might wonder where my animate() function is. I scrapped it. 
        // Placing that code in the constructor not only saves memory its better for readability and places code paradign in line with other engines
        
        for (var i = 0; i < this.strings.length; i++){
            this.animationImg[i] = loadImage(this.strings[i]);
        }
    }

    draw(x, y, frame){
        image(this.animationImg[frame],x ,y , 100, 100); // X and Y are relative to the characters "world origin" set by the translate method in the character.js file. See my inane ramblings on "push() and pop()"
    }
}