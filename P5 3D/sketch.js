
var rotateCounter = 0;

function preload() {

}

function setup() {
  createCanvas(1000, 500, WEBGL);

}

function draw(){
  background(210);
  push();
  translate(75 + (150 * (Math.sin(rotateCounter * 0.15))), 25, -100);
  rotateX(radians(50 + rotateCounter));
  box();
  pop();

  push();
  translate(-100, 10, -250);
  rotateY(radians(50 + rotateCounter));
  torus();
  pop();

  push();
  translate(100, 20, 50);
  rotateY(radians(70 + rotateCounter*1.5));
  rotateX(radians(-70 + rotateCounter*1.5));
  torus();
  pop();

  push();
  translate(-200, 20, 50);
  rotateY(radians(70 + rotateCounter*1.5));
  rotateZ(radians(70 + rotateCounter*1.5));
  sphere();
  pop();
  
  push();
  translate(100, 150, 50);
  rotateY(radians(70 + rotateCounter*1.5));
  rotateX(radians(70 + rotateCounter*1.5));
  cone();
  pop();

  rotateCounter++;
}