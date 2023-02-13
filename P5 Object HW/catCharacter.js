class catCharacter{
    constructor(inputStringsIdle, inputStringsWalk, x, y){
        // These Properties handle animation creation and selection
            this.Idle = new animation(inputStringsIdle);
            this.RightWalk = new animation(inputStringsWalk);
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
        /* This code logs current frame data
            console.log(Math.floor(this.frame / this.animationSpeedFactor));
            console.log(this.frame);
        */
        console.log(key);
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

        if(keyIsDown(16) && this.isMoving){
            this.walkSpeed = 10;
            this.animationSpeedFactor = 1;
        }
        else {
            this.walkSpeed = 5;
            this.animationSpeedFactor = 5;
        }

        if(this.isMoving()){
            this.CurrentAnimation = this.RightWalk;
        }
        else{
            this.CurrentAnimation = this.Idle;
        }

        //console.log(this.currentScale[0]);
        push();
        imageMode(CENTER);
        translate(this.x, this.y);
        scale(this.currentScale[0], 1);

        this.frame++;
        if(this.frame >= (this.animationSpeedFactor * 10)){
            this.frame = 0;
        }
        noStroke();
        fill(5,5,5,50);
        
        ellipse(-3,45,40,12.5);
        this.CurrentAnimation.draw(0, 0, Math.floor(this.frame / this.animationSpeedFactor), this.currentScale[0], this.currentScale[1]);
        
        
        pop();
    }

    isMoving(){
        return keyIsDown(87) || keyIsDown(83) || keyIsDown(65) || keyIsDown(68);
    }
}
