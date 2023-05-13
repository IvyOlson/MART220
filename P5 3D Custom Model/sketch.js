
var rotateCounter = 0;

var Oneday;

var text1;
var text2;
var text3;
var text4;
var text5;

var texMain;
var IvyGoat;

var translationX = 300;
var translationY = 50;

var shapeArray = [];

function preload() {
  Oneday = loadFont('assets/Oneday.ttf');

  IvyGoat = loadModel('assets/IvyGoat.obj', true);
}

function setup() {
  createCanvas(1000, 500, WEBGL);

  textFont(Oneday);
  texMain = loadImage("assets/texMain.png");
  text1 = loadImage("images/Wonderful.png");
  text2 = loadImage("images/woter.png");
  text3 = loadImage("images/FFXV.jpg");
  text4 = loadImage("images/CrystalBakcdrop.png");
  text5 = loadImage("images/3301LogoBorderless.png");

  shapeArray.push(new shape("box", translationX, translationY, 0.5, 0.1, 0, text1));
  shapeArray.push(new shape("sphere", -200, 20, 0.2, 0.05, 0, text2));
  shapeArray.push(new shape("box", translationX + 100, translationY * -1, 0.3, 0.15, 0, text3));
  shapeArray.push(new shape("sphere", 420, 10, 0.01, 0.3, 0, text4));
  shapeArray.push(new shape("box", -150, -40, 0.1, 0.2, 0, text5));

}

function draw(){
  background(210);

  push();
  fill(0);
  noStroke();
  rotateX(degrees(90));
  rotateY(degrees(120));
  rotateZ(degrees(90));
  texture(texMain);
  model(IvyGoat);
  pop();

  push();
  translate(-450, -175, 0);
  fill(0);
  textSize(30);
  text("The Cartoon Goat", 0, 0);
  pop();

  push();
  translate(-400, -125, 0);
  fill(0);
  textSize(25);
  text("By Ivy Olson", 0, 0);
  pop();

  for (var i = 0; i < shapeArray.length; i++) {
    shapeArray[i].draw(rotateCounter);
  }
  console.log(translationX);
  rotateCounter++;
}

function mouseClicked(){
  translationX = ceil(random(200));
  translationY = ceil(random(200));

  shapeArray[0].X = translationX;
  shapeArray[2].X = translationX + 100;

  shapeArray[0].Y = translationY;
  shapeArray[2].Y = translationY * -1;

  console.log("RANDOMIZE");
}