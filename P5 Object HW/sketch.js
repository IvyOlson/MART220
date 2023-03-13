var Kitty;
var inputStrings = [];
var inputCandyStrings = [];
var Jellies = [];
var chompSound;
var bgm;

function preload() {
  // Why do these have to be in the preload! Why can't they load in on construct! How you wound me p5.js!!

  inputStringsIdle = loadStrings("animations/idle/idle.txt");
  inputStringsWalk = loadStrings("animations/walk/walk.txt");
  inputStringsJelly = loadStrings("animations/candy/jelly.txt");
  
  inputStrings = [inputStringsIdle, inputStringsWalk]; // This condenses the input strings into an array which makes for better readability. Maybe not the most efficient, but I like it.
  soundFormats('mp3', 'ogg', 'wav');
  chompSound = loadSound("sounds/chew.wav");
  bgm = loadSound("sounds/DrumRun.mp3");
  bgm.loop();
}

function setup() {
  createCanvas(2000, 2000);

  console.log("THIS SUCKS!!!!!!!!!!! WHY DOES THIS WORK!!!!!!!!!!!!!"); // Context: I need this log or the program breaks. No clue why or how, I just do. The Load-Bearing Tomato of this project >:(
  
  Kitty = new character(inputStrings, 100, 100);
  for(var i = 0; i < random(1, 20); i++){
    Jellies[i] = new object(random(1, 1500), random(1, 1500), inputStringsJelly, Boolean(round(random(0,1))));
  }
}

function draw(){
 
  background(255);

  if(!bgm.isPlaying()) bgm.play();

  for(var i = 0; i < Jellies.length; i++){
    Jellies[i].draw();
  }

  Kitty.tick();

  for(var i = 0; i < Jellies.length; i++){
    if(!Jellies[i].eaten && (Kitty.x > (Jellies[i].x - Jellies[i].cWidth)) && (Kitty.x < (Jellies[i].x + Jellies[i].cWidth)) && (Kitty.y > (Jellies[i].y - Jellies[i].cHeight)) && (Kitty.y < (Jellies[i].y + Jellies[i].cHeight))){
      console.log("COLLIDING!!!");
      Jellies[i].eaten = true;
      if(!Jellies[i].poison){
        if((Kitty.curHP + 1) <= Kitty.maxHP) Kitty.curHP += 1;
        chompSound.play();
      }
      else{
        if((Kitty.curHP - 1) >= 0) Kitty.curHP -= 1;
      }
    }
  }
  fill(0);
  textSize(32);
  text("HP: " + Kitty.curHP, 100, 100);

}


