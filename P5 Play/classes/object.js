class object{
    constructor(inputStringArray, xInit, yInit, charRef, harm){
        this.Sprite = new Sprite();
        this.Sprite.x = xInit;
        this.Sprite.y = yInit;
        this.Sprite.addAni("idle", inputStringArray[0]);
        this.Sprite.scale = 0.3;
        this.charRef = charRef;
        this.harm = harm;
        this.type = "collider";
    }

    tick(){
        if(this.Sprite.overlaps(this.charRef.Sprite)){
            if(harm){
                this.charRef.hp -= 1;
            }
            else{
                this.charRef.score += 1;
            }
        }
    }
}