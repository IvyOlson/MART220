class shape{
    constructor(type, x, y, rotateXSpeed, rotateYSpeed, rotateZSpeed, texture){
        this.type = type;
        this.X = x;
        this.Y = y;
        this.rotateXSpeed = rotateXSpeed/5;
        this.rotateYSpeed = rotateYSpeed/5;
        this.rotateZSpeed = rotateZSpeed/5;
        this.texture = texture;
    }

    draw(frame){
        push();

        rotateX(this.rotateXSpeed * frame);
        rotateY(this.rotateYSpeed * frame);
        rotateZ(this.rotateZSpeed);

        translate(this.X, this.Y)
        
        
        texture(this.texture);

        switch(this.type){
            case "box":
                box();
                break;
            case "sphere":
                sphere();
                break;
        }
        pop();
    }
}