var catCharacter;
var inputStringsArray;
var inputWalk = []
var inputIdle = [];

function preload() {
  var inputIdle = loadStrings("assets/animations/idle/idle.txt");
  var inputWalk = loadStrings("assets/animations/walk/walk.txt");
  inputStringsArray = [inputIdle, inputWalk];
}

function setup() {
  createCanvas(1280, 720);
  catCharacter = new character(inputStringsArray, 100, 200);
}

function draw(){
 
  background(255);
  catCharacter.tick();
}


