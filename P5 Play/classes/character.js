class character{
    constructor(inputStringArray, xInit, yInit){
        this.Sprite = new Sprite();
        this.Collider = new Sprite();
        this.Sprite.x = xInit;
        this.Sprite.y = yInit;
        this.Sprite.addAni("idle", inputStringArray[0]);
        this.Sprite.addAni("walk", inputStringArray[1]);
        this.CharacterSpeed = 5;
        this.Sprite.scale = 0.3;

        //Health
        this.maxHP = 50;
        this.hp = this.maxHP;
        this.score = 0;
    }

    tick(){
        this.characterMovement();
        this.animationHandler();
        this.Sprite.rotation = 0;
    }

    characterMovement(){
        if(kb.pressing('d')) {
            this.Sprite.mirror.x = false;
            this.Sprite.velocity.x = this.CharacterSpeed;
        }
        else if(kb.pressing('a')) {
            this.Sprite.mirror.x = true;
            this.Sprite.velocity.x = -this.CharacterSpeed;
        }
        else{
            this.Sprite.velocity.x = 0;
        }
        
        if(kb.pressing('w')){
            this.Sprite.velocity.y = -this.CharacterSpeed;
        }
        else if(kb.pressing('s')){
            this.Sprite.velocity.y = this.CharacterSpeed;
        }
        else{
            this.Sprite.velocity.y = 0;
        }

        if(kb.pressing('shift')){
            this.CharacterSpeed = 10;
            this.Sprite.ani.frameDelay = 2;
        }
        else{
            this.CharacterSpeed = 5;
            this.Sprite.ani.frameDelay = 2;
        }
    }

    animationHandler(){
        if(this.Sprite.velocity.x != 0 || this.Sprite.velocity.y != 0){
            this.Sprite.ani = 'walk';
        }
        else{
            this.Sprite.ani = 'idle';
        }
    }
}