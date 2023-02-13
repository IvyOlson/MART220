class catCharacter{
    constructor(inputStringsIdle, inputStringsWalk){
        this.Idle = new animation(inputStringsIdle);
        this.Walk = new animation(inputStringsWalk);
        this.CurrentAnimation = this.Idle;
        this.frame = 0;
        this.animationSpeedFactor = 3;
    }

    draw(x, y){
        /* This code logs current frame data
            console.log(Math.floor(this.frame / this.animationSpeedFactor));
            console.log(this.frame);
        */
        this.CurrentAnimation.draw(x, y, Math.floor(this.frame / this.animationSpeedFactor), 1, 1);
        this.frame++;
        if(this.frame >= (this.animationSpeedFactor * 10)){
            this.frame = 0;
        }
    }

    move(0, 1){

    }
}
