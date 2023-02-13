var Kitty;
var inputStrings = [];

function preload() {
  inputStringsIdle = loadStrings("animations/idle/idle.txt");
  inputStringsWalk = loadStrings("animations/walk/walk.txt");
  inputStrings = [inputStringsIdle, inputStringsWalk];
}

function setup() {
  createCanvas(2000, 2000);
 // imageMode(CENTER);
  console.log("THIS SUCKS!!!!!!!!!!! WHY DOES THIS WORK!!!!!!!!!!!!!");
  
  Kitty = new character(inputStrings, 100, 100);
}

function draw(){
  background(255);
  Kitty.tick();
}


