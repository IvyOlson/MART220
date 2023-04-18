class Particle{
    constructor(x, y){
        this.particles = new Group();
        this.particles.x = x;
        this.particles.y = y;
        this.particles.collider = 'none';
        this.particles.direction = () => random(1,360);
        this.particles.d = 9;
        this.particles.speed = () => random(1,10);
        this.particles.amount = 10;
        this.particles.life = 40;
    }

    tick(){
    }
}