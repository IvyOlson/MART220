var Kitty1;
var Kitty2;
var inputStrings;

function preload() {
  inputStringsIdle = loadStrings("animations/idle/idle.txt");
  inputStringsWalk = loadStrings("animations/walk/walk.txt");
}

function setup() {
  createCanvas(2000, 2000);

  console.log("THIS SUCKS!!!!!!!!!!! WHY DOES THIS WORK!!!!!!!!!!!!!");
  
  Kitty1 = new catCharacter(inputStringsIdle, inputStringsWalk, 100, 100);
}

function draw(){
  background(255);
  Kitty1.tick();
}


