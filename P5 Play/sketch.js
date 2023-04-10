var catCharacter;
var inputStringsArray;
var inputWalk = []
var inputIdle = [];
var blockers;
var objects;
var pickupTypes = [];

function preload() {
  var inputIdle = loadStrings("assets/animations/idle/idle.txt");
  var inputWalk = loadStrings("assets/animations/walk/walk.txt");
  inputStringsArray = [inputIdle, inputWalk];

}

function setup() {
  createCanvas(1280, 720);
  catCharacter = new character(inputStringsArray, 100, 200);

  blockers = new Group();
  blockers.color = 'red';
  blockers.w = 50;
  blockers.h = 50;

  objects = new Group();

  while (blockers.length < 18){
    var square = new blockers.Sprite();
    square.collider = 's';
    square.x = random(125,1000);
    square.y = random(125,675);

  }

  while (objects.length < 18){
    var object = new objects.Sprite();
    object.diameter = 80;
    object.Sprite = "k";
    object.x = random(125, 1000);
    object.y = random(125,675);
  }

  for(var i = 0; i < objects.length; i++){
    if(round(random(0,1)) == 0) pickupTypes[i] = "harm";
    if(round(random(0,1)) == 1) pickupTypes[i] = "help";
  }

  catCharacter.Sprite.overlaps(objects, collect);
  
}

function collect(player, object){
  console.log(pickupTypes[objects.indexOf(object)]);

  if(pickupTypes[objects.indexOf(object)] == "harm"){
    catCharacter.hp -= 1;
  }
  
  if(pickupTypes[objects.indexOf(object)] == "help"){
    catCharacter.hp++;
  }

  object.remove();
}

function draw(){
 
  background(255);
  catCharacter.tick();

  fill(0, 0, 0);

  if(catCharacter.hp >= 10){
    text("YOU WIN!!!!", 100, 100, );
  }
  else if(catCharacter.hp <= 0){
    text("YOU LOSE!!!!!!!", 100, 100, );
  }
  else{
    text(catCharacter.hp, 100, 100, );
  }



}


