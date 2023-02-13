var Kitty;
var inputStrings = [];
var inputCandyStrings = [];
var Jellies = [];

function preload() {
  // Why do these have to be in the preload! Why can't they load in on construct! How you wound me p5.js!!

  inputStringsIdle = loadStrings("animations/idle/idle.txt");
  inputStringsWalk = loadStrings("animations/walk/walk.txt");
  inputStringsJelly = loadStrings("animations/candy/jelly.txt");
  
  inputStrings = [inputStringsIdle, inputStringsWalk]; // This condenses the input strings into an array which makes for better readability. Maybe not the most efficient, but I like it.
}

function setup() {
  createCanvas(2000, 2000);

  console.log("THIS SUCKS!!!!!!!!!!! WHY DOES THIS WORK!!!!!!!!!!!!!"); // Context: I need this log or the program breaks. No clue why or how, I just do. The Load-Bearing Tomato of this project >:(
  
  Kitty = new character(inputStrings, 100, 100);
  for(var i = 0; i < random(1, 20); i++){
    Jellies[i] = new object(random(1, 1500), random(1, 1500), inputStringsJelly);
  }
}

function draw(){
 
  background(255);
  
  for(var i = 0; i < Jellies.length; i++){
    Jellies[i].draw();
  }

  Kitty.tick();

  for(var i = 0; i < Jellies.length; i++){
    if(!Jellies[i].eaten && (Kitty.x > (Jellies[i].x - Jellies[i].cWidth)) && (Kitty.x < (Jellies[i].x + Jellies[i].cWidth)) && (Kitty.y > (Jellies[i].y - Jellies[i].cHeight)) && (Kitty.y < (Jellies[i].y + Jellies[i].cHeight))){
      console.log("COLLIDING!!!");
      Jellies[i].eaten = true;
    }
  }
  
}


