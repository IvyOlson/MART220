function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  sushiBG();
  sushiFilling();
}

function sushiBG() {
  fill(0);
  ellipse(200,200,100,120);
  ellipse(220,200,100,120);
  ellipse(210,200,100,120);
  fill(255);
  ellipse(202,200,90,115);
}

function sushiFilling(){
  fill(245,93,66);
  quad(170, 170, 200, 200, 200, 230, 170, 200);
  fill(79, 207, 0);
  ellipse(190,170,25,25);
  ellipse(210,190,25,25);
}