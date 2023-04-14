
var rotateCounter = 0;

var Oneday;

var text1;
var text2;
var text3;
var text4;
var text5;

function preload() {
  Oneday = loadFont('assets/Oneday.ttf');
}

function setup() {
  createCanvas(1000, 500, WEBGL);

  textFont(Oneday);
  text1 = loadImage("images/Wonderful.png");
  text2 = loadImage("images/woter.png");
  text3 = loadImage("images/FFXV.jpg");
  text4 = loadImage("images/CrystalBakcdrop.png");
  text5 = loadImage("images/3301LogoBorderless.png");

}

function draw(){
  background(210);

  push();
  translate(-450, -175, 0);
  fill(0);
  textSize(30);
  text("The SHAPES!!!", 0, 0);
  pop();

  push();
  translate(-400, -125, 0);
  fill(0);
  textSize(25);
  text("By Ivy Olson", 0, 0);
  pop();

  push();
  texture(text1);
  noStroke();
  translate(75 + (150 * (Math.sin(rotateCounter * 0.15))), 25, -100);
  rotateX(radians(50 + rotateCounter));
  box();
  pop();

  push();
  texture(text2);
  noStroke();
  translate(-100, 10, -250);
  rotateY(radians(50 + rotateCounter));
  torus();
  pop();

  push();
  texture(text3);
  noStroke();
  translate(100, 20, 50);
  rotateY(radians(70 + rotateCounter*1.5));
  rotateX(radians(-70 + rotateCounter*1.5));
  torus();
  pop();

  push();
  texture(text4);
  noStroke();
  translate(-200, 20, 50);
  rotateY(radians(70 + rotateCounter*1.5));
  rotateZ(radians(70 + rotateCounter*1.5));
  sphere();
  pop();
  
  push();
  texture(text5);
  noStroke();
  translate(100, 150, 50);
  rotateY(radians(70 + rotateCounter*1.5));
  rotateX(radians(70 + rotateCounter*1.5));
  cone();
  pop();

 

  rotateCounter++;
}