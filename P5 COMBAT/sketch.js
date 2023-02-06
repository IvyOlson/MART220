var fulum; //This is you! You are Fu Lum (see "Dragonball Evolution: The Video Game" for the PSP for answers on who this character is)

var dagoth; //This guy sucks

var THEHELM; //ALL HAIL THE COLOVIAN BANANA HAT, BEAUTIFUL AND ACQUIRABLE BY THE MASSES. MAY ITS YELLOWNESS INSPIRE LUST IN THE TRIBUNAL WORSHIPPERS AND BRING THEM TO THE GOOD DAEDRA

//font for handling Dagoth's Speech.
var dagothFont;

//General Typewriter Font
var typeFont;

//General Animation Counter
var counter = 0;

//Timer for handling helmet text. This sucks because if I don't do it this way, I need a boolean as well to gate this for a pseudo Do-Once. It sucks. This sucks
var helmTimer = 0;

//Cutscene counter
var cutCounter = 0;

//HP Handler Values
var dagothHP = 10;
var nerevarHP = 5;

//Animation Values
var damageOffset = 0;

//Cutscene Bools
var cutscene = true;
var helmText = false;

//Who let me make all of these variables

function preload() {
  //Loads all of the funny images for this. Wish there was a way to batch load these, god damn
    fulum = loadImage("assets/image/fulum.png");
    dagoth = loadImage("assets/image/Dagoth_Ur_Character_webp.png");
    THEHELM = loadImage("assets/image/helm.png");
    dagothFont = loadFont("assets/fonts/Ancient_Medium.ttf"); 
    typeFont = loadFont("assets/fonts/JMH_Typewriter.otf");
}

function setup() {
  createCanvas(800, 800);
  noiseSeed(random(-100,100));
  setInterval(advanceCutscene, 1500);
}

function draw(){
  background(255);
  
  //Handles general animation counter
    counter++;
  
  //Dialogue Handlers
    //Handles Dagoth-Ur's intro dialogue
    displayDialogue(1, cutCounter, "Come Nerevar");
    displayDialogue(2, cutCounter, "Friend or Traitor");
    displayDialogue(3, cutCounter, "Lets us battle");
    displayDialogue(4, cutCounter, "For the funny banana hat");

    //Sets cutscene variables properly
    if(cutCounter == 4 && cutscene == true){
      cutscene = false;
      setInterval(damageDagothRoll, 2000);
    } //This is very dumb, do not do this if you value sane code

    //Handles damage "screams"
    displayDialogue(9, dagothHP, "OW! That HURT!");
    displayDialogue(7, dagothHP, "You are gonna make me mad :(");
    displayDialogue(5, dagothHP, "Now i'm mad! ]:(");
    displayDialogue(2, dagothHP, "I yield!");

    //Handles the end dialogue for both Item Acquisiton and Dagoth-Ur's "Death Knell"
    if(dagothHP <= 0){
      if(helmText == false){
        fill("#000000");
        textFont(dagothFont);
        textSize(35);
        text("OUGH", 25, 400);
        helmTimer++
        if(helmTimer > 150) helmText = true;
      }
      if(helmText == true){
        fill("#000000");
        textFont(typeFont);
        textSize(35);
        text("Colovian Banana Helm Acquired", 25, 400);
      }
      image(THEHELM, 400, 25, 250, 250);
    }

  //Handles Player Image. Damage offset is for attack animation. Cutscene bool keeps player still during cutscenes
    image(fulum, 50 + (50*noise(0.021 * counter * !(cutscene))) + damageOffset, 25 + (50*noise(0.02 * (counter+5) * !(cutscene))), 150, 150);
  
  //Handles Dagoth's animations and removes him once he is dead
    if(dagothHP > 0) image(dagoth, 400 + (50*noise(0.01 * (counter+7) * !(cutscene))), 25 + (50*noise(0.01 * (counter+3) * !(cutscene))), 250, 250); //There has to be a way to seperate these into script files, right?
  
  //Decrements damage animation
    if(damageOffset > 0) damageOffset--;

    fill(200);
    rect(20, 500, 500, 130);

    fill(0);
    textFont(dagothFont)
    textSize(40);
    text("Combat with a God, I guess", 25, 550);

    textFont(typeFont);
    textSize(20);
    text("Ivy Olson", 25, 600);
}

function advanceCutscene() {
  cutCounter++;
}

function displayDialogue(requiredCount, counterVal, dialogue){
  if(counterVal == requiredCount){
    fill("#000000");
    textFont(dagothFont);
    textSize(35);
    text(dialogue, 25, 400);
  }
}

function damageDagothRoll(){
  if(dagothHP > 0){
    var roll = random(1,10);
    if(roll > 1){
      dagothHP--;
      damageOffset = 75;
    }
  }
}