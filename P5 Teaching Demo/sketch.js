var pupImg;
var snoreImg;
var snoreSound;
var successChecks = [];
var aX;
var aY;
var bX;
var bY;

function preload() {
  pupImg = loadImage("assets/pup.jpg");
  snoreImg = createImg("assets/giphy.gif", "");
  snoreImg.hide();
  aX = 150;
  aY = 350;
  bX = 700;
  bY = 420;
}

function setup() {
  createCanvas(768, 768);
}

function draw() {
  image(pupImg, 0, 0);
  snoreImg.position(150, 100);
  circle(aX, aY, 50);
  circle(bX, bY, 50);

}