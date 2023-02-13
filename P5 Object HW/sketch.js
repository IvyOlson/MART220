var Kitty;
var inputStrings = [];

function preload() {
  // Why do these have to be in the preload! Why can't they load in on construct! How you wound me p5.js!!

  inputStringsIdle = loadStrings("animations/idle/idle.txt");
  inputStringsWalk = loadStrings("animations/walk/walk.txt");
  
  inputStrings = [inputStringsIdle, inputStringsWalk]; // This condenses the input strings into an array which makes for better readability. Maybe not the most efficient, but I like it.
}

function setup() {
  createCanvas(2000, 2000);

  console.log("THIS SUCKS!!!!!!!!!!! WHY DOES THIS WORK!!!!!!!!!!!!!"); // Context: I need this log or the program breaks. No clue why or how, I just do. The Load-Bearing Tomato of this project >:(
  
  Kitty = new character(inputStrings, 100, 100);

}

function draw(){
 
  background(255);
  Kitty.tick();

}


