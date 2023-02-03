var noiseCounterX = 0;
var noiseCounterY = 0;
var x = 0;
var y = 0;
var fulum;

function preload() {
  fulum = loadImage("image/fulum.png");
}

function setup() {
  createCanvas(400, 400);
  noiseSeed(random(-100,100));
}

function draw() {
  background(255);

  image(fulum, 100, 100, 100, 100);

  sushiBG();
  sushiFilling();
  fill(0);
  textSize(15);
  text("Ivy Olson",320,390);
  textSize(23);
  text("Sushi Wobble",20,20);
  if(keyIsDown(UP_ARROW)){
    noiseCounterX += 0.01;
    noiseCounterY += 0.015;
  }
  x = (noise(noiseCounterX) * 150) - 75;
  y = (noise(noiseCounterY) * 150) - 75;
}

function sushiBG() {
  fill(0);
  ellipse(200 + x,200 + y,100,120);
  ellipse(220 + x,200 + y,100,120);
  ellipse(210 + x,200 + y,100,120);
  fill(255);
  ellipse(202+ x,200 + y,90,115);
}

function sushiFilling(){
  fill(245,93,66);
  quad(170 + x, 170 + y, 200 + x, 200 + y, 200 + x, 230 + y, 170 + x, 200 + y);
  fill(79, 207, 0);
  ellipse(190 + x,170 + y,25,25);
  ellipse(210 + x,190 + y,25,25);
}