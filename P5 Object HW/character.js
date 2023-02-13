class character{
    constructor(inputStrings, x, y){
        // These Properties handle animation creation and selection
            //All animation objects require an array of strings, which is fed in through a super-array of input strings in the "inputStrings" parameter
            var idleStrings = inputStrings[0];
            var walkStrings = inputStrings[1];
            this.Idle = new animation(idleStrings); 
            this.Walk = new animation(walkStrings); 
            this.CurrentAnimation = this.Idle;

        // These Properties handle animation playing
            this.frame = 0;
            this.animationSpeedFactor = 5;

        // These Properties handle transformation
            this.currentScale = [1, 1];
            this.x = x;
            this.y = y;

        // These Properties handle movement
            this.walkSpeed = 5;
        
        // These Properties handle Health and Damage
            this.maxHP = 5;
            this.curHP = this.maxHP;
    }

    tick(){
        /* 
            The tick() function is used to handle all operations which need to be done frame-by-frame. This is called "tick" as it is a generally language and engine agnostic term
            for a function which needs to be done frame-by-frame. I am NOT calling it draw, as this function handles MUCH more than drawing. Character Drawing is still handled 
            by this function, but it also handles the following:
                - Key Input
                - Scaling
                - Sprint Behavior
                - Shadow Drawing
            
            Add any character specific code you want done frame-by-frame to THIS function.
        */

        this.handleMovement();
        
        // Movement Animation is handled through simply checking whether the move keys are pressed or not.
            if(this.isMoving()){
                this.CurrentAnimation = this.Walk;
            }
            else{
                this.CurrentAnimation = this.Idle;
            }

        // This is the bulk of the draw code. I'm not a huge fan of the "push and pop" method of individual drawing. but it works for this. Honestly? Having to move the canvas itself
        // and draw that way is so weird. Imagine moving the paper instead of moving your pen to draw because you for some reason can't decipher how to turn an object properly. Bonkers.
            push(); //push() and pop() basically allow you to isolate any alterations made to the p5.js drawing settings. push() starts a new "profile", and pop() resets it to the default "profile"

            imageMode(CENTER);

            translate(this.x, this.y); //this, and I shit you not, moves the ENTIRE CANVAS to the required location. I HAVE to do this for it to scale properly.
            scale(this.currentScale[0], 1);

            
            this.incrementFrame(); // This handles incrementing the animation. Its better than set interval :p
            this.draw(); //This is just a way for me to bunch all the drawing related things together
            
            pop();
    }

    isMoving(){
        return keyIsDown(87) || keyIsDown(83) || keyIsDown(65) || keyIsDown(68);
    }

    draw(){

        // This draws the shadow and the current frame of animation. I will explain the Frame Math under the action draw function

        noStroke();
        fill(5,5,5,50);
        
        ellipse(-3,45,40,12.5);
        this.CurrentAnimation.draw(0, 0, Math.floor(this.frame / this.animationSpeedFactor));

        // Alright, so what the hell am I doing for the frame number right? Let me explain. I'm shifting to multi-line comments because this is a bit of a doozy.
        /*
            So basically, think about how animations don't usually go 60fps for movies and 2d games. Usually its 24fps, 30fps, etc. This simulates that by doing a bit of simple math.
            Every frame, when it draws, it takes the current *actual* frame number (incremented by its associated function) and divides it by the Animation Speed Factor (the lower the factor, the quicker the animation).
            This resulting "pseudo-frame" is a float, which does not work for the purposes of an image array. To solve this, the float is "floored" (rounded towards 0). The result is a slower, controllable frame-based
            number which works perfectly for my purposes and doesn't create a timer which can clog memory.
        */
    }

    incrementFrame(){

        // Sorry Cassens, I like this better than the setInterval() function for this. It allows better speed control and doesn't make animation get shunted into a seperate process.
        // I feel bad for not using the "Class Designated Kosher" method, but when you are building an animation handling system in a character class you gotta go for efficiency!!

        this.frame++;
        if(this.frame >= (this.animationSpeedFactor * 10)){
            this.frame = 0;
        }
    }

    handleMovement(){
        // These conditionals handle movement. It works using the keycodes for the W, A, S, and D keys. 
        // The reason I use these is because as far as I can tell, the arrow keys are broken :\
        if(keyIsDown(87)){
            this.y -= this.walkSpeed;
        }

        if(keyIsDown(83)){
            this.y += this.walkSpeed;
        }

        if(keyIsDown(65)){
            this.x -= this.walkSpeed;
            this.currentScale[0] = -1;
        }

        if(keyIsDown(68)){
            this.x += this.walkSpeed;
            this.currentScale[0] = 1;
        }
    
        // This conditional handles Sprinting. This is done by modifying the animationSpeedFactor and walkSpeed, but only if the player is moving and the shift key is down. 
        // Java Script cannot discern directionality of shift key, for some ****in reason!!!
            if(keyIsDown(16) && this.isMoving){
                this.walkSpeed = 10;
                this.animationSpeedFactor = 1;
            }
            else {
                this.walkSpeed = 5;
                this.animationSpeedFactor = 5;
            }
    
    }
}
