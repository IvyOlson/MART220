var catCharacter;
var inputStringsArray;
var inputWalk = []
var inputIdle = [];
var blockers;
var objects;
var pickupTypes = [];
var particleSystem;
var hp = 5;
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

  enemies = new Group();
  enemies.color = 'purple';
  enemies.w = 75;
  enemies.h = 75;
  
  
  while(enemies.length < 5){
    var enemy = new enemies.Sprite();
    enemy.collider = "s";
    enemy.x = round(random(100,800));
    enemy.y = round(random(100,600));
    enemy.hp = 5;
  }

  objects = new Group();

  while (blockers.length < 5){
    var square = new blockers.Sprite();
    square.collider = 's';
    square.x = random(125,1000);
    square.y = random(125,675);

  }

  while (objects.length < 5){
    var object = new objects.Sprite();
    object.diameter = 80;
    object.collider = "k";
    object.x = random(125, 1000);
    object.y = random(125,675);
  }

  for(var i = 0; i < objects.length; i++){
    if(round(random(0,1)) == 0){
      pickupTypes[i] = "harm";
      objects[i].color = "red";
    } 
    if(round(random(0,1)) == 1){
      pickupTypes[i] = "help";
      objects[i].color = "green";
    } 

  }

  catCharacter.Sprite.overlaps(objects, collect);

  catCharacter.Sprite.collides(enemies, attack);
  
}

function attack(player, enemy){
  if(kb.pressing('space')){
    console.log("ATTACK");
    enemy.hp -= 1;
    particleSystem = new Particle(enemy.x, enemy.y);
    if(enemy.hp <= 0) enemy.remove();
  }
}

function collect(player, object){
  console.log(pickupTypes[objects.indexOf(object)]);

  if(pickupTypes[objects.indexOf(object)] == "harm"){
    hp -= 1;
  }
  
  if(pickupTypes[objects.indexOf(object)] == "help"){
    hp++;
  }
  particleSystem = new Particle(object.x, object.y);
  object.remove();
}

function draw(){
 
  background(255);
  catCharacter.tick();

  fill(0, 0, 0);

  if(hp >= 10){
    text("YOU WIN!!!!", 100, 100, );
  }
  else if(hp <= 0){
    text("YOU LOSE!!!!!!!", 100, 100, );
  }
  else{
    text(hp, 100, 100, );
  }
  if(particleSystem != null) particleSystem.tick();


}


