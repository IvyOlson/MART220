class catCharacter{
    constructor(inputStringsIdle, inputStringsWalk, x, y){
        this.Idle = new animation(inputStringsIdle);
        this.Walk = new animation(inputStringsWalk);
        this.CurrentAnimation = this.Idle;
        this.frame = 0;
        this.animationSpeedFactor = 3;
        this.x = x;
        this.y = y;
    }

    tick(){
        /* This code logs current frame data
            console.log(Math.floor(this.frame / this.animationSpeedFactor));
            console.log(this.frame);
        */
        console.log(key);
        if(keyIsDown(87)){
            this.y -= 5;
        }

        if(keyIsDown(83)){
            this.y += 5;
        }

        if(keyIsDown(65)){
            this.x -= 5;
        }

        if(keyIsDown(68)){
            this.x += 5;
        }

        if(keyIsPressed){
            this.CurrentAnimation = this.Walk;
        }
        else{
            this.CurrentAnimation = this.Idle;
        }

        this.CurrentAnimation.draw(this.x, this.y, Math.floor(this.frame / this.animationSpeedFactor), 1, 1);
        this.frame++;
        if(this.frame >= (this.animationSpeedFactor * 10)){
            this.frame = 0;
        }
    }
}
